<?php
header("Access-Control-Allow-Origin: *"); // Allow API calls from frontend
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

header("Content-Type: application/json");

// Database connection details
$servername = "localhost";
$username = "root"; // Default MySQL user for XAMPP
$password = ""; // Default MySQL password (empty in XAMPP)
$database = "healhubdb"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

error_log("Database connection successful."); // Log successful connection
// Check connection

if ($conn->connect_error) {
    die(json_encode(["success" => false, "message" => "Database connection failed"]));
}

// Get JSON input
$data = json_decode(file_get_contents("php://input"), true);

error_log("Received data: " . json_encode($data)); // Log received data
// Validate required fields

if (isset($data["name"], $data["address"], $data["phonenumber"], $data["email"], $data["password"])) {
    $name = $conn->real_escape_string($data["name"]);
    $address = $conn->real_escape_string($data["address"]);
    $phonenumber = $conn->real_escape_string($data["phonenumber"]);
    $email = $conn->real_escape_string($data["email"]);
    $password = password_hash($data["password"], PASSWORD_DEFAULT); // Encrypt password

    // Check if email already exists
    $checkEmailQuery = "SELECT * FROM login WHERE email='$email'";
    $result = $conn->query($checkEmailQuery);

    if ($result->num_rows > 0) {
        error_log("Email already exists: " . $email); // Log email existence check

        echo json_encode(["success" => false, "message" => "Email already exists! Try logging in."]);
    } else {
        // Insert user data into login table
        $sql = "INSERT INTO login (name, address, phonenumber, email, password) 
                VALUES ('$name', '$address', '$phonenumber', '$email', '$password')";

        if ($conn->query($sql) === TRUE) {
            error_log("Signup successful for email: " . $email); // Log successful signup
echo json_encode(["success" => true, "message" => "Signup successful!"]);


        } else {
            error_log("Signup failed: " . $conn->error); // Log signup failure
            echo json_encode(["success" => false, "message" => "Signup failed: " . $conn->error]);
        }
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid input data."]);
}

// Close connection
$conn->close();
?>

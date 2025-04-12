<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$servername = "localhost";
$username = "root";  // Change as per your database
$password = "";      // Change as per your database
$dbname = "healhubdb"; // Change as per your database

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    error_log("Connection failed: " . $conn->connect_error); // Log connection error
    die(json_encode(["success" => false, "message" => "Connection failed"]));
}

$data = json_decode(file_get_contents("php://input"));

if (!isset($data->email) || !isset($data->password)) {
    echo json_encode(["success" => false, "message" => "Invalid Input"]);
    exit();
}

error_log("Received email: " . $data->email); // Log received email
$email = $conn->real_escape_string($data->email);

$password = $data->password;

$sql = "SELECT * FROM login WHERE email='$email'";
$result = $conn->query($sql);

error_log("Query executed: " . $sql); // Log the executed query
if ($result->num_rows > 0) {
    error_log("User found: " . $email); // Log user found

    $user = $result->fetch_assoc();
    if (password_verify($password, $user['password'])) {
        error_log("Password verified for user: " . $email); // Log password verification
        echo json_encode(["success" => true, "message" => "Login successful"]);
    } else {
        echo json_encode(["success" => false, "message" => "Invalid password"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "User not found"]);
}

$conn->close();
?>

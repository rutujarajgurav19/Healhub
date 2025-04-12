<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$servername = "localhost";
$username = "root";  // Change if needed
$password = "";      // Change if needed
$dbname = "healhubdb"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode(["success" => false, "message" => "Database connection failed"]));
}



// Get the input data
$data = json_decode(file_get_contents("php://input"));

if (!isset($data->name) || !isset($data->email) || !isset($data->phone) || !isset($data->date) || !isset($data->time) || !isset($data->reason)) {
    echo json_encode(["success" => false, "message" => "Invalid Input"]);
    exit();
}

$name = $conn->real_escape_string($data->name);
$email = $conn->real_escape_string($data->email);
$phone = $conn->real_escape_string($data->phone);
$date = $conn->real_escape_string($data->date);
$time = $conn->real_escape_string($data->time);
$reason = $conn->real_escape_string($data->reason);

// Insert query
$sql = "INSERT INTO appointments (name, email, phone, date, time, reason) VALUES ('$name', '$email', '$phone', '$date', '$time', '$reason')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["success" => true, "message" => "Appointment booked successfully"]);
} else {
    echo json_encode(["success" => false, "message" => "Error booking appointment"]);
}

$conn->close();
?>

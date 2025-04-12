<?php
// forgotPassword.php
header('Content-Type: application/json');
include 'healhubdb.php'; // Include database connection

$email = $_POST['email'];

// Check if the email exists
$query = "SELECT * FROM users WHERE email = '$email'";
$result = mysqli_query($conn, $query);

if (mysqli_num_rows($result) > 0) {
    // Here you would typically send a password reset email
    echo json_encode(['success' => true, 'message' => 'Password reset email sent']);
} else {
    echo json_encode(['success' => false, 'message' => 'Email not found']);
}
?>

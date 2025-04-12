<?php
// editProfile.php
session_start();
header('Content-Type: application/json');
include 'healhubdb.php'; // Include database connection

if (isset($_SESSION['user'])) {
    $userId = $_SESSION['user']['id']; // Assuming user ID is stored in session
    $name = $_POST['name'];
    $email = $_POST['email'];

    // Update user information
    $query = "UPDATE users SET name = '$name', email = '$email' WHERE id = '$userId'";
    if (mysqli_query($conn, $query)) {
        $_SESSION['user']['name'] = $name; // Update session data
        $_SESSION['user']['email'] = $email; // Update session data
        echo json_encode(['success' => true, 'message' => 'Profile updated successfully']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Error updating profile']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'User not logged in']);
}
?>

<?php
// getUser.php
session_start();
header('Content-Type: application/json');
include 'healhubdb.php'; // Include database connection

if (isset($_SESSION['user'])) {
    $user = $_SESSION['user'];
    echo json_encode(['success' => true, 'user' => $user]);
} else {
    echo json_encode(['success' => false, 'message' => 'User not logged in']);
}
?>

<?php
// logout.php
session_start();
header('Content-Type: application/json');

// Destroy the session to log out the user
session_destroy();
echo json_encode(['success' => true, 'message' => 'Logged out successfully']);
?>

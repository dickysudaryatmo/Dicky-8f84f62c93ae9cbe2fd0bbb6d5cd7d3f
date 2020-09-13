<?php 
session_start();
session_destroy();
$logout = [
    'logout' => 'logout',
];
echo json_encode($logout);
?>

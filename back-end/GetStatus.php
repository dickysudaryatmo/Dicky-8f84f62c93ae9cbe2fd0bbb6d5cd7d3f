<?php
session_start();
$user = $_SESSION['user']['username'];
$time = $_SESSION['user']['time_login'];
// echo "<br>";
echo "Hai " . $user . ".";
echo "Waktu login anda " . $time . ".";
?>
<?php
require_once("config.php");

if (isset($_POST)) {


    $username = $_POST['username'];

    $password = $_POST["password"];
    $retype_password = $_POST["repeat_password"];

    $sql = "INSERT INTO users (username, password, retype_password) 
            VALUES (:username, :password,  :retype_password)";
    $stmt = $db->prepare($sql);

    $params = array(
        ":username" => $username,
        ":password" => $password,
        ":retype_password" => $retype_password,
    );

    $saved = $stmt->execute($params);

    if ($saved) {
        $success = "sukses";
        echo $success;
    };
}
?>
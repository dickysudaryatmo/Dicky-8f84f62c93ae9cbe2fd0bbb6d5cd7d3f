<?php 

require_once("config.php");

if(isset($_POST)){

    $username = $_POST['username'];
    $password = $_POST["password"];

    $sql = "SELECT * FROM users WHERE username=:username";
    $stmt = $db->prepare($sql);

    $params = array(
        ":username" => $username,
    );

    $stmt->execute($params);

    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if($user){

        if($password == $user["password"]){

            
            $berhasil = "berhasil";
            $waktu_login = date('H:i:s');
            session_start();
            $_SESSION["username"] = $user;
            $_SESSION["time_login"] = $waktu_login;
            $login = [
                'login' => $berhasil,
                'time'  => $waktu_login,
                'username'  => $user['username']
            ];

            echo json_encode($login);
        } else {
            $gagal = "gagal";
            echo $gagal;
        }
    }
}

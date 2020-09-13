if ($("#timestamp").length) {
    $(function () {
        setInterval(timestamp, 1000); //fungsi yang dijalan setiap detik, 1000 = 1 detik
    });
    
    //Fungi ajax untuk Menampilkan Jam dengan mengakses File ajax_timestamp.php
    function timestamp() {
        $.ajax({
            url: '../back-end/HomeController.php',
            success: function (data) {
                $('#timestamp').html(data);
            },
        });
    }
}

$("#register").submit(function (event) {
    event.preventDefault();
    var $form = $(this);
    var $inputs = $form.find("input, select, button, textarea");
    var serializedData = $form.serialize();

    $inputs.prop("disabled", true);
    console.log(serializedData)
    $inputs.prop("disabled", true);
    $.ajax({
        url: "../back-end/Register.php",
        type: "post",
        data: serializedData,
        success: function (response) {
                // you will get response from your php page (what you echo or print)     
                console.log(response)
                if (response == 'sukses') {
                    window.location.href = "../front-end/login.html";
                }

            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(textStatus, errorThrown);
            }
    });
});

$("#login").submit(function (event) {
    event.preventDefault();
    var $form = $(this);
    var $inputs = $form.find("input, select, button, textarea");
    var serializedData = $form.serialize();

    $inputs.prop("disabled", true);
    console.log(serializedData)
    $inputs.prop("disabled", true);
    $.ajax({
        url: "../back-end/Login.php",
        type: "post",
        data: serializedData,
        success: function (response) {
                // you will get response from your php page (what you echo or print)     
                // console.log(response, JSON.parse(response))
                var response = JSON.parse(response)
                console.log(response)
                if (response.login == 'berhasil') {
                    $("#username").val(response.username)
                    $("#time_login").val(response.username)
                    window.location.href = "../front-end/home.html";
                }         

            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(textStatus, errorThrown);
            }
    });
    // $.post('../back-end/Login.php', serializedData, function (response) {
    //     success: function success(result) {}
    //     console.log(response);
    //     window.location.href = "../front-end/home.html";
    // });
});

$(document).ready(function () {
    $("#registrasi").click(function () {
        window.location.href = "../front-end/registrasi.html";
    });
    $("#getStatus").click(function () {
            $.ajax({
                url: "../back-end/GetStatus.php",
                type: "post",
                data: '',
                success: function (response) {
                    $("#username").val(response)
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log(textStatus, errorThrown);
                }
            });
    });
    $("#logout").click(function () {
        $.ajax({
            url: "../back-end/logout.php",
            type: "post",
            data: '',
            success: function (response) {

            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(textStatus, errorThrown);
            }
        });
    });
});
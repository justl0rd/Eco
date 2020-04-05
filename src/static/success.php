<?php
header("Content-Type: text/html; charset=utf-8");
$email = htmlspecialchars($_POST["email"]);
$getName = htmlspecialchars($_POST["name"]);
$getTel = htmlspecialchars($_POST["tel"]);
$refferer = getenv('HTTP_REFERER');
$date = date("d.m.y"); 
$time = date("H:i"); 
$myemail = "ecoprom.kiev@gmail.com";

$username = "" ;
if ($getName) {
	$username = "<b>Имя:</b> " . $getName ."<br>";
}

$useremail = "" ;
if ($email) {
	$useremail = "<b>Email клиента:</b> " . $email ."<br>";
}

$tel = "" ;
if ($getTel) {
	$tel = "<b>Телефон:</b> " . $getTel ."<br>";
}


// Email Structure

$tema = "Заявка на сайте";
$message_to_myemail = "
$username
$tel
$useremail 
<b>Дата и время заполнения заявки:</b> $date | $time <br>
<b>Источник (ссылка):</b> $refferer
";

mail($myemail, $tema, $message_to_myemail, "From: <ecoprom.kiev@gmail.com> \r\n КИЕВСКИЙ ЦЕНТР ПРОМЭКОЛОГИИ \r\n"."MIME-Version: 1.0\r\n"."Content-type: text/html; charset=utf-8\r\n" );
?>
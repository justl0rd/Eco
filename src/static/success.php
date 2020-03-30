<?php
header("Content-Type: text/html; charset=utf-8");
$email = htmlspecialchars($_POST["email"]);
$getName = htmlspecialchars($_POST["name"]);
$getCountry = htmlspecialchars($_POST["country"]);
$refferer = getenv('HTTP_REFERER');
$date = date("d.m.y"); 
$time = date("H:i"); 
$myemail = "marmorela@ukr.net";

$username = "" ;
if ($getName) {
	$username = "<b>Имя:</b> " . $getName ."<br>";
}

$useremail = "" ;
if ($email) {
	$useremail = "<b>Email клиента:</b> " . $email ."<br>";
}

$country = "" ;
if ($getCountry) {
	$country = "<b>Страна:</b> " . $getCountry ."<br>";
}


// Email Structure

$tema = "Eco ";
$message_to_myemail = "
$username
$country
$useremail 
<b>Дата и время заполнения заявки:</b> $date | $time <br>
<b>Источник (ссылка):</b> $refferer
";

mail($myemail, $tema, $message_to_myemail, "From: <info@webdeity.ru> \r\n Eco \r\n"."MIME-Version: 1.0\r\n"."Content-type: text/html; charset=utf-8\r\n" );
?>
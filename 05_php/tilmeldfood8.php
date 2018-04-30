<?php
$fra="Fred356e@stud.kea.dk";
$til="admin@frederikerichsen.dk";

$navn=$_REQUEST['navn'];
$email=$_REQUEST['email'];
$besked="<p style='font-family: sans-serif; font-size:30px; color:lightgreen'>".$_REQUEST['besked']."</p>";

mail($til, "Besked fra $navn, $email", $besked, "Content-type:text/html; charset=utf-8\r\nform: $fra");
header ("Location: tilmeldtak.html")
?>

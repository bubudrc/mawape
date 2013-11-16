<?php

   // PREPARE THE BODY OF THE MESSAGE
	$message = '<html><body>';
	$message .= '<h3>Nuevo Mail</h3> 
               <p>Nombre: '. strip_tags($_POST['contact-name']) .'</p>
               <p>Email: '. strip_tags($_POST['contact-mail']) .'</p>
               <p>Telefono: '. strip_tags($_POST['contact-phone']) .'</p>
               <p>Mensaje: '. strip_tags($_POST['contact-msj']) .'</p>';
	$message .= '</body></html>';

   $asunto = utf8_decode(strip_tags('MaWaPe Web - Contacto'));
   $subject = "=?ISO-8859-1?B?".base64_encode($asunto)."=?=";

   $headers = 'From: MaWaPe ' . $_POST['contact-mail'] . "\r\n";
   $headers .= "MIME-Version: 1.0\r\n";
   $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
   $body = utf8_decode($message);

   mail('marcelo.perretta@gmail.com', $subject, $body, $headers);

?>
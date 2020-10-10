<?php
require_once 'dbconnect.php';

$info = json_decode(file_get_contents("php://input"));

if ($info > '0') {

  $name = mysqli_real_escape_string($conn, $info->name);
  $email = mysqli_real_escape_string($conn, $info->email);
  $msg = mysqli_real_escape_string($conn, $info->message);

  $to_email = "rasmus.skovhaven@gmail.com";
  $headers = 'MIME-Version: 1.0' . "\r\n";
  $headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";
  $headers .= "Bcc: mailbot@webnation.dk" . "\r\n";
  $headers .= 'From: mailbot@webnation.dk' . "\r\n";
  $subject = "Besked fra PORTFOLIO!";
  $message = "
      <html>
        <head>
          <meta charset='utf-8'>
          <meta http-equiv='X-UA-Compatible'>
          <title>Webnation mail</title>
          <style>
            body, html {height:100%; color:#333; background:#F7F7F3; font-family:'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif;}
            h1, h2, h3, h4, h5, h6 {margin-top: 0; margin-bottom: 0.5rem;}
            h1 {font-size: 26px; font-weight:300;}
            h2 {font-size: 22px; font-weight:300;}
            h3 {font-size: 19px; font-weight:300;}
            h4 {font-size: 16px; font-weight:300;}
            h5 {font-size: 14px; font-weight:300;}
            h6 {font-size: 11px; font-weight:300;}
            a {color:rgba(0,38,122,1.00); text-decoration:none;}
            a:hover {color:rgba(0,160,6,1.00); text-decoration:none;}
          </style>
        </head>
        <body>
          <h2>Navn:</h2>
          $name<br><br>
          <h2>E-mail:</h2>
          $email<br><br>
          <h2>Besked:</h2>
          $msg<br><br>
        </body>
        </html>";
  $message = str_replace("\n.", "\n..", $message);
  if (mail($to_email, $subject, $message, $headers)) {
    echo 1;
  } else {
    echo 2;
  }
}

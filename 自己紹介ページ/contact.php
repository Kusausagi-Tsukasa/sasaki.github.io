<?php
  if($_POST){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $to = 'kusausagi.tsukasa@gmail.com';
    $subject = 'お問い合わせ';
    $headers = 'From: ' . $email . "\r\n" . 'Reply-To: ' . $email . "\r\n" . 'X-Mailer: PHP/' . phpversion();
    mail($to, $subject, $message, $headers);
  }
?>

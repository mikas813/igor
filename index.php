<?php
if (isset($_POST['name']) && isset($_POST['email'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $to = 'mishalas@icloud.com';
    $subject = 'Hello';
    $body = '<html>
  <body>
  <h2>example</h2>
  <p>Name:' . $name . '</p>
  <p>Email:' . $email . '</p>
  </body>
  </html>
  ';
    //headers
    $headers = 'From: ' . $name . ' <' . $email . '>\r\n';
    $headers .= 'Reply-to: ' . $email . '\r\n';
    $headers .= 'MINE-Version: 1.0\r\n';
    $headers .= 'Content-type: text/html; charset-utf-8';
    //send
    $send = mail($to, $subject, $body, $headers);
    if ($send) {
        echo '<br>';
        echo 'Thanks for conctact';
    } else {
        echo 'Error';
    }
}
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<form action="" method="post">
    <input type="text" name="name">
    <hr>
    <input type="text" name="email">
    <hr>
    <button
        type="submit"
    >send</button>
</form>
</body>
</html>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
  "http://www.w3.org/TR/html4/strict.dtd">
<html>
  <head>
    <title>Űrlap</title>
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8" >
  </head>
  <body>
    <p>Általános űrlapadatok:</p>
    <pre><?php print_r($_POST); ?></pre>
    <p>Feltöltött fájl adatai:</p>
    <pre><?php print_r($_FILES); ?></pre>
  </body>
</html>

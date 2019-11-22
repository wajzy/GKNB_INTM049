<!DOCTYPE html>
<html lang="hu-HU">
  <head>
    <title>Űrlapok</title>
    <meta charset="utf-8" />
  </head>
  <body>
    <p>A szerver a következő kulcs-érték párokat kapta a HTTP tranzakció 
       során:</p><pre>
<?php
  print_r($_POST);
?>
</pre>
<?php
  define("CELMAPPA", "/home/feltoltes/www/");
  define("MAXKOR", 7*24*60*60); // egy hét
  // törlés
  $fajlok = scandir(CELMAPPA);
  $most = time();
  foreach($fajlok as $fajl) {
    $fajl = CELMAPPA.$fajl;
    if(is_file($fajl)) {
      $modositva = filemtime($fajl);
      if($most-$modositva > MAXKOR) {
        unlink($fajl);
      }
    }
  }
  // megjelenítés
  if (isset($_FILES["kepek"])) {
    echo "<p>Nyers fájladatok:</p>\n<pre>";
    print_r($_FILES);
    echo "</pre><p>Feltöltött képek:</p>\n";
    for($i=0; $i<count($_FILES["kepek"]["type"]); $i++) {
      if(strpos($_FILES["kepek"]["type"][$i],"image/") === 0) {
        $eredetiNev = $_FILES["kepek"]["name"][$i];
        $atmenetiNev = $_FILES["kepek"]["tmp_name"][$i];
        if(!move_uploaded_file($atmenetiNev, CELMAPPA.$eredetiNev)) {
          echo "<p>Nem sikerült felmásolni a $nev fájlt.</p>\n";
        }
        $meret = getImageSize(CELMAPPA.$eredetiNev);
        echo "<figure>\n"
          . "<img src=\"/~feltoltes/$eredetiNev\" width=\"$meret[0]\" "
          . "height=\"$meret[1]\">\n"
          . "<figcaption>$eredetiNev</figcaption>\n"
          . "</figure>\n";
      }
    }
  }
?>
  </body>
</html>

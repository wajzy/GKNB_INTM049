<!DOCTYPE html>
<html lang="hu-HU">
  <head>
    <title>Űrlapok</title>
    <meta charset="utf-8" />
  </head>
  <body>
    <p>
<?php
  if(filter_has_var(INPUT_GET, "a") && 
     filter_has_var(INPUT_GET, "b") && 
     filter_has_var(INPUT_GET, "c")) {
       $a = filter_var($_GET["a"], FILTER_VALIDATE_FLOAT);
       $b = filter_var($_GET["b"], FILTER_VALIDATE_FLOAT);
       $c = filter_var($_GET["c"], FILTER_VALIDATE_FLOAT);
       if($a && $b && $c) {
         if($a>0 && $b>0 || $c>0) {
           if($a+$b>$c && $c+$a>$b && $b+$c>$a) {
             $kerulet = $a+$b+$c;
             $s = $kerulet/2.;
             $kerulet = number_format($kerulet, 3, ",", " ");
             $terulet = number_format(sqrt($s*($s-$a)*($s-$b)*($s-$c)),
                3, ",", " ");
             echo "Kerület: $kerulet, terület: $terulet.";
           } else {
             echo "A háromszög nem szerkeszthető meg.";
           }
         } else {
           echo "Az oldalhosszaknak pozitívnak kell lenniük.";
         }
       } else {
         echo "Az adatok formátuma nem megfelelő.";
       }
  } else {
    echo "A szükséges adatok nem állnak rendelkezésre.";
  }
?>
</p>
  </body>
</html>

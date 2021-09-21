const gyok = function(szam) {
  const EPS = 10e-6;
  let elozo, akt = 10, diff;
  do {
    elozo = akt;
    akt = elozo - (elozo*elozo-szam)/(2*elozo);
    diff = elozo - akt;
    if(diff < 0) diff *= -1;
  } while(diff > EPS);
  return akt;
}
console.log(gyok(2));
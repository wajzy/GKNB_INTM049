console.log(function cinkeltKocka(...sulyok) {
  let osszeg = 0;
  for(let s of sulyok) {
    osszeg += s;
  }
  let veletlen = Math.random()*osszeg;
  let oldal = 0;
  for(let s=0; s<=veletlen; s+=sulyok[oldal], oldal++);
  return oldal;
}(1, 1, 1, 1, 1, 5));

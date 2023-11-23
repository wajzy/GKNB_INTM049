console.log(function cinkeltKocka(...sulyok) {
  let veletlen = Math.random() * sulyok.reduce((a, b) => a+b);
  let oldal = 0;
  for(let s=0; s<=veletlen; s+=sulyok[oldal], oldal++);
  return oldal;
}(1, 1, 1, 1, 1, 5));

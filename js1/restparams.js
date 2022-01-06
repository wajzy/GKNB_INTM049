function atlag1() {
  let osszeg = 0;
  for(let adat of arguments) {
    osszeg += adat;
  }
  return osszeg / arguments.length;
}
console.log(atlag1(1, 2, 3, 4)); // 2.5

function atlag2(...adatok) {
  let osszeg = 0;
  for(let adat of adatok) {
    osszeg += adat;
  }
  return osszeg / adatok.length;
}
console.log(atlag2(1, 2, 3, 4)); // 2.5

let szamok1 = [1, 2, 3, 4];
console.log(atlag2(...szamok1)); // 2.5
let szamok2 = [0, ...szamok1, 5, 6];
console.log(szamok2); // [ 0, 1, 2, 3, 4, 5, 6 ]
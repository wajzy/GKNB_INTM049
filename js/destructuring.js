function det1(mtx) {
  return mtx[0][0]*mtx[1][1] - mtx[0][1]*mtx[1][0];
}
const m = [[3, 5], [2, 7]];
console.log(det1(m)); // 11
const det2 = ([[a, b], [c, d]]) => a*d - b*c;
console.log(det2(m)); // 11

let {nev, zh1, zh2} = { nev: "Fehér Ilona", neptun: "QWERTZ", 
                        zh1: 12, zh2: 19 };
console.log(`${nev} összesen ${zh1+zh2} pontot ért el a ZH-kon.`)
// Fehér Ilona összesen 31 pontot ért el a ZH-kon.
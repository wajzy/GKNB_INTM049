let t1 = []; // üres tömb
console.log(typeof t1); // object
let t2 = ["Alma", "Banán", "Citrom"];
console.log(t2[1]); // Banán
t2[1] = "Burgonya";
console.log(t2[1]); // Burgonya
console.log(t2.length); // 3

function nyomtat1(tomb) {
  for(let elem of tomb) {
    console.log(elem);
  }
}
nyomtat1(t2);

function nyomtat2(tomb) {
  for(let idx in tomb) {
    console.log(idx, ":", tomb[idx]);
  }
}
nyomtat2(t2);

let tulajdonsagok = Object.keys({
  egy: 1,
  ketto: 2,
  harom: 3
});
nyomtat2(tulajdonsagok);

t2[3] = "Dió";
nyomtat2(t2);
t2[5] = "Füge";
console.log(t2.length); // 6
console.log(t2[4]); // undefined
nyomtat2(t2);
let t3 = ["Alma", , "Citrom", ];
console.log(t3.length); // 3
nyomtat2(t3);
let t4 = ["Alma", , "Citrom", undefined];
console.log(t4.length); // 4
nyomtat2(t4);

delete t4[2];
nyomtat2(t4);

let t5 = [ 1, 2, 3 ];
t5.push(4);
nyomtat2(t5);
console.log(t5.pop()); // 4
nyomtat2(t5);
t5.unshift(0);
nyomtat2(t5);
console.log(t5.shift()); // 0
nyomtat2(t5);

let t6 = ["Alma", "Banán"];
let t7 = [1, 2, 3];
let t8 = t6.concat(t7);
nyomtat2(t8);

let t9 = ["Alma", "Banán", "Citrom", "Dió"];
console.log(t9.splice(1, 2)); // ["Banán", "Citrom"]
console.log(t9); // ["Alma", "Dió"]
console.log(t9.splice(2, 0, "Eper", "Füge")); // []
console.log(t9); // ["Alma", "Dió", "Eper", "Füge"]
console.log(t9.splice(-1, 1)); // ["Füge"]

let t10 = ["Alma", "Banán", "Citrom", "Dió"];
//          0       1        2         3
//         -4      -3       -2        -1
console.log(t10.slice(1, 2)); // ["Banán"]
console.log(t10); // ["Alma", "Banán", "Citrom", "Dió"]
console.log(t10.slice(-3, -1)); // ["Banán", "Citrom"]

let t11 = ["Alma", "Banán", "Citrom", "Alma"];
//          0       1        2         3
//         -4      -3       -2        -1
console.log(t11.indexOf("Banán")); // 1
console.log(t11.indexOf("Dió")); // -1
console.log(t11.lastIndexOf("Alma")); // 3
console.log(t11.indexOf("Alma", 1)); // 3
console.log(t11.indexOf("Alma", -3)); // 3

let t12 = [["Alma", "Banán"],
           [1, 2, 3]];
function mtxNyomtat(mtx) {
  for(let sor in mtx) {
    for(let cella in mtx[sor]) {
      console.log(sor, cella, ":", mtx[sor][cella]);
    }
  }
}
mtxNyomtat(t12);

let tomb = [10, 2, 100, 20, 1, 200]
console.log(tomb.sort()) // 1, 10, 100, 2, 20, 200
console.log(tomb.sort((a, b) => b-a)) // 200, 100, 20, 10, 2, 1

let szamok = [10, 20, 30];
szamok.forEach(elem => console.log(elem / 10)); // 1 2 3
console.log(szamok.every(elem => elem > 15)); // false
console.log(szamok.some(elem => elem > 15)); // true
console.log(szamok.filter(elem => elem > 15)); // [20, 30]
console.log(szamok.map(elem => elem*elem)); // [100, 400, 900]
console.log(szamok.reduce((osszeg, szam) => osszeg + szam)); // 60
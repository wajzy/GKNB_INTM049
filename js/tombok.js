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
    console.log(idx, ": ", tomb[idx]);
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

let t9 = [t6, t7];
function rekNyomtat(tomb, prefix="") {
  for(let idx in tomb) {
    if(typeof tomb[idx] == "object") {
      rekNyomtat(tomb[idx], prefix + idx + " ");
    } else {
    	console.log(prefix, idx, ": ", tomb[idx]); 
    }
  }
}
rekNyomtat(t9);
let t10 = t9.concat(["alfa", "beta"]);
rekNyomtat(t10);

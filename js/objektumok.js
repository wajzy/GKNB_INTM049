const hg = {
  nev: "Kovács István",
  neptun: "a1b2c3",
  zh: 12
};
console.log(hg.zh); // 12
hg.zh = 14; // Tulajdonságok változtathatók
console.log(hg.zh); // 14
// De const miatt az objektum nem váltható le
/*
hg = { // TypeError: invalid assignment to const 'hg'
  nev: "Nagy Péter",
  neptun: "1q2w3e",
  zh: 13
};
*/

// Kötések (binding), nem klasszikus változók 
let hallgato = hg;
hg.zh = 15;
console.log(hallgato.zh); // 15

// Tulajdonság létezésének tesztelése
console.log("nev" in hg); // true
console.log("evfolyam" in hg); // false

// Milyen tulajdonságok vannak az objektumban, milyen értékkel?
function nyomtat(obj) {
  for(let tul in obj) {
    console.log(tul, ": ", obj[tul]);
  }  
}

// Objektumok tartalmi másolása
const hg2 = {
  nev: "Kovács Emőke",
  zh2: 19
};

let egyesitett = Object.assign({}, hg, hg2);
nyomtat(egyesitett);
Object.assign(hg2, hg);
nyomtat(hg2);

// Tulajdonságok utólagos hozzáadása, elvétele
hg.zh1 = hg.zh;
delete hg.zh;
hg.zh2 = 20;
nyomtat(hg);

let nev = "Fekete Péter";
let neptun = "abcdef";
let zh1 = 12;
let zh2 = 8;
const hg3 = { 
  nev: nev, 
  neptun: neptun, 
  zh1: zh1, 
  zh2: zh2
};
nyomtat(hg3);
const hg4 = { nev, neptun, zh1, zh2 };
nyomtat(hg4);

// Metódusok; arrow fn. nem használható, 
// mert nincs saját kötése a this-hez
hg.getAlairas = function() {
  return (this.zh1+this.zh2) >= 20;
}
console.log(hg.getAlairas()); // true

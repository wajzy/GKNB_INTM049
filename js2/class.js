class Negyzet {
  constructor(oldalHossz) {
    this.a = oldalHossz;  
  }
  kerulet() {
    return 4 * this.a;
  }
  terulet() {
    return this.a * this.a;
  }
}

const negyzet2 = new Negyzet(2);
const negyzet5 = new Negyzet(5);
console.log(`a=${negyzet2.a}, K=${negyzet2.kerulet()}`); // 2, 8
console.log(`a=${negyzet5.a}, T=${negyzet5.terulet()}`); // 5, 25
console.log(Object.getPrototypeOf(negyzet2) == Negyzet.prototype); 
  // true
console.log(Object.getPrototypeOf(Negyzet) == Function.prototype); 
  // true
console.log(Object.getPrototypeOf(Function.prototype) == 
            Object.prototype); // true

// osztály kifejezés
const kocka = new class {
  constructor(oldalak) {
    this.oldalak = oldalak;
  }
  dobas() {
    return Math.floor(Math.random()*this.oldalak) + 1;
  }
}(6);
console.log(kocka.dobas()); // [1, 6]

console.log(kocka.toString()); // [object Object]
kocka.toString = function() {
  return `Ez egy ${this.oldalak} oldalszámú "kocka".`;
}
console.log(kocka.toString()); // Ez egy 6 oldalszámú "kocka".
delete kocka.toString;
console.log(kocka.toString()); // [object Object]
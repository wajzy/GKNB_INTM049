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
const negyzet = new class {
  constructor(oldalHossz) {
    this.a = oldalHossz;
  }
  kerulet() {
    return 4 * this.a;
  }
}(6);
console.log(`K=${negyzet.kerulet()}`); // 24

console.log(negyzet.toString()); // [object Object]
negyzet.toString = function() {
  return `Ez egy ${this.a} oldalhosszú négyzet.`;
}
console.log(negyzet.toString()); // Ez egy 6 oldalhosszú négyzet.
// A konzol interaktívan jelenítené meg 'negyzet' adatait
console.log(String(negyzet)); // Ez egy 6 oldalhosszú négyzet.
// Az objektum nyomtatásakor implicit toString() hívás történik
alert(negyzet); // Ez egy 6 oldalhosszú négyzet.
delete negyzet.toString;
console.log(negyzet.toString()); // [object Object]
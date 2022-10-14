function Negyzet(oldalHossz) {
  this.a = oldalHossz;
}
Negyzet.prototype.kerulet = function() {
  return 4 * this.a;
}
Negyzet.prototype.terulet = function() {
  return this.a * this.a;
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
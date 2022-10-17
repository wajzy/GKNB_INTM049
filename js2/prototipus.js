// Származtatási hierarchia, fa struktúra
console.log(Object.getPrototypeOf([]) == Array.prototype); // true 
console.log(Object.getPrototypeOf(Array.prototype) == Object.prototype); 
  // true
console.log(Object.getPrototypeOf(Object.prototype) == null); // true

// Őse az Object.prototype
const negyzet = {
  a: 5,
  kerulet: function() {
    return 4 * this.a;
  },
  terulet() { // rövidítés
    return this.a * this.a;
  }
};

// Őse a negyzet, bár egy prototípusban nem szokás egyedi adatot tárolni
const teglalap = Object.create(negyzet);
teglalap.b = 3;
// felüldefiniált metódus
teglalap.kerulet = function() {
  // a-t megörökli, b saját adattag
  return 2 * (this.a+this.b);
};
teglalap.terulet = function() {
  return this.a * this.b;
};

console.log(Object.getPrototypeOf(negyzet) == Object.prototype) // true
console.log(Object.getPrototypeOf(teglalap) == negyzet) // true
console.log(`Négyzet kerülete: ${negyzet.kerulet()}`); // 20
console.log(`Négyzet területe: ${negyzet.terulet()}`); // 25
console.log(`Téglalap kerülete: ${teglalap.kerulet()}`); // 16
console.log(`Téglalap területe: ${teglalap.terulet()}`); //15
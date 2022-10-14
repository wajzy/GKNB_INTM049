const teglalap = {
  a: 5,
  b: 3,
  kerulet: function() {
    return 2 * (this.a + this.b)
  }
}
// Utólag is hozzáadható egy metódus, adattag
teglalap.terulet = function() {
  return this.a * this.b;
}
// Viszont nyíl fv. nem használható, mert nincs kötése a this-hez
teglalap.atlo = () => Math.sqrt(this.a*this.a + this.b*this.b);

// A tulajdonságok (adattagok, metódusok) nyilvánosak
console.log(`A téglalap oldalhosszai: ${teglalap.a}, ${teglalap.b}`); // 5, 3
console.log(`Kerülete: ${teglalap.kerulet()}`); // 16
console.log(`Területe: ${teglalap.terulet()}`); // 15
console.log(`Átlójának hossza: ${teglalap.atlo()}`) // NaN

// Egy független fv. számára is biztosítható a this kötése
function atlo2() { 
  return Math.sqrt(this.a*this.a + this.b*this.b); 
}
console.log(`Átlójának hossza: ${atlo2.call(teglalap)}`); // 5.83
const teglalap2 = { a: 1, b: 1, atlo2 };
console.log(`Átlójának hossza: ${teglalap2.atlo2()}`); // 1.41

// A nyíl fv. látja környezetének this kötését
function atlo3() {
  return (() => Math.sqrt(this.a*this.a + this.b*this.b))()
}
// Egy hagyományos function-re viszont ez nem igaz
function atlo4() {
  return (function() {
    return Math.sqrt(this.a*this.a + this.b*this.b);
  })();
}
console.log(`Átlójának hossza: ${atlo3.call(teglalap)}`) // 5.83
console.log(`Átlójának hossza: ${atlo4.call(teglalap)}`) // NaN
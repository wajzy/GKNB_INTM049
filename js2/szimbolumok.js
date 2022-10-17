const negyzet = {
  a: 5
};
// negyzet.toString is jó lenne
negyzet["toString"] = function() {
  return `A négyzet oldalhossza: ${this.a}`;
}
negyzet["toString"] = function() { // felülírás
  return `Oldalhossz: ${this.a}, kerület: ${4*this.a}`;
} 
console.log(String(negyzet)); // Oldalhossz: 5, kerület: 20

const negyzet2 = {
  a: 5
};
const toString1 = Symbol("toString");
const toString2 = Symbol("toString");
negyzet2[toString1] = function() {
  return `A négyzet oldalhossza: ${this.a}`;
}
negyzet2[toString2] = function() {
  return `Oldalhossz: ${this.a}, kerület: ${4*this.a}`;
}
console.log(String(negyzet2[toString1]())); // A négyzet oldalhossza: 5
console.log(String(negyzet2[toString2]())); // Oldalhossz: 5, kerület: 20
console.log(toString1 == toString2); // false
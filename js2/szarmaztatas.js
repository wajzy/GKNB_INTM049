class Negyzet {
  constructor(a) {
    this.a = a;  
  }
  get kerulet() {
    return 4 * this.a;
  }
  get terulet() {
    return this.a * this.a;
  }
  toString() {
    return `Négyzet a=${this.a}, K=${this.kerulet}, T=${this.terulet}`;
  }
}

class Teglalap extends Negyzet {
  constructor(a, b) {
    super(a);
    this.b = b;
  }
  get kerulet() {
    return 2 * (this.a+this.b);
  }
  get terulet() {
    return this.a * this.b;
  }
  toString() {
    return `Téglalap a=${this.a}, b=${this.b}, ` +
      `K=${this.kerulet}, T=${this.terulet}`;
  }
}

const negyzet = new Negyzet(2);
const teglalap = new Teglalap(3, 5);
console.log(String(negyzet)); // Négyzet a=2, K=8, T=4
console.log(String(teglalap)); // Téglalap a=3, b=5, K=16, T=15
console.log(teglalap instanceof Teglalap); // true
console.log(teglalap instanceof Negyzet); // true
console.log(teglalap instanceof Object); // true
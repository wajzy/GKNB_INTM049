class USgallon {
  static gallon2liter = 3.785411784;
  constructor(gallon) {
    this.gallon = gallon;
  }
  get liter() {
    return this.gallon * USgallon.gallon2liter;
  }
  set liter(value) {
    this.gallon = value / USgallon.gallon2liter;
  }
  static fromLiter(value) {
    return new USgallon(value / USgallon.gallon2liter);
  }
}

console.log(`1 liter = ${USgallon.fromLiter(1).gallon} US gallon`);
  // 1 liter = 0.26417205235814845 US gallon
let g = new USgallon(1);
console.log(`1 US gallon = ${g.liter} liter`);
  // 1 US gallon = 3.785411784 liter
g.liter = 10;
console.log(`10 liter = ${g.gallon} US gallon`);
  // 10 liter = 2.6417205235814842 US gallon
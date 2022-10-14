const negyzet = {
  kerulet() {
    return 4 * this.a;
  },
  terulet() {
    return this.a * this.a;
  }
};

function konstruktor(oldalHossz) {
  const peldany = Object.create(negyzet);
  peldany.a = oldalHossz;
  return peldany;
}

const negyzet2 = konstruktor(2);
const negyzet5 = konstruktor(5);
console.log(`a=${negyzet2.a}, K=${negyzet2.kerulet()}`); // 2, 8
console.log(`a=${negyzet2.a}, T=${negyzet2.terulet()}`); // 2, 4
console.log(`a=${negyzet5.a}, K=${negyzet5.kerulet()}`); // 5, 20
console.log(`a=${negyzet5.a}, T=${negyzet5.terulet()}`); // 5, 25


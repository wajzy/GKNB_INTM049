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
console.log(`a=${negyzet2.a}`); // a=2
console.log(`K=${negyzet2.kerulet()}, T=${negyzet2.terulet()}`);
	// K=8, T=4
console.log(`a=${negyzet5.a}`); // a=5
console.log(`K=${negyzet5.kerulet()}, T=${negyzet5.terulet()}`);
	// K=20, T=25
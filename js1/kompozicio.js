for(const idx of [1, 2, 3].keys()) { // iterátor a kulcsokra
  console.log(idx);
} // 0 1 2

console.log(Array(5)); // 5 elemű üres tömböt hoz létre

const tartomany = n => [...Array(n).keys()];
const novel = a => a + 1;
const szorzas = (a, b) => a * b;
const faktorialis = (n) => tartomany(n).map(novel).reduce(szorzas);
console.log(faktorialis(5)) // 120
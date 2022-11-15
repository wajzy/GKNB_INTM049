let mtx = [
  [1, 2],
  [3, 4]
];

function frobenius1(m) {
  osszeg = 0.;
  for (let sor of mtx) {
    for (let cella of sor) {
      osszeg += cella*cella;
    }
  }
  return osszeg;
}

console.log(frobenius1(mtx)); // 30

function frobenius2(m) {
  return m.reduce((a, b) => a.concat(b)).map(a => a**2).reduce((a, b) => a + b)
}

console.log(frobenius2(mtx)); // 30
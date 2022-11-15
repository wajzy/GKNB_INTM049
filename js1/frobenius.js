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
  const negyzet = (c1, c2) => c1*c1 + c2*c2;
  return m.reduce((s1, s2) => s1.reduce(negyzet) + s2.reduce(negyzet));
}

console.log(frobenius2(mtx)); // 30
const osszead = (a, b) => a + b;
const muvelet = function(a, op, b) {
  console.log(`${a} + ${b} = ${op(a, b)}`);
}
muvelet(3, osszead, 5); // 3 + 5 = 8
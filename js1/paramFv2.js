const muvelet = function(a, op, b) {
  console.log(`${a} + ${b} = ${op(a, b)}`);
}
muvelet(3, (a, b) => a + b, 5); // 3 + 5 = 8
muvelet(4, 
  function(a, b) {
    return a + b;
  },
  7
); // 4 + 7 = 11
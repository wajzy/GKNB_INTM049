(function(a, op, b) {
  console.log(`${a} + ${b} = ${op(a, b)}`);
})(3, (a, b) => a + b, 5); // 3 + 5 = 8

((a, op, b) => {
  console.log(`${a} + ${b} = ${op(a, b)}`);
})(4, (a, b) => a + b, 7); // 4 + 7 = 11
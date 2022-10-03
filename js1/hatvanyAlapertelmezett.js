const hatvany = function(alap, kitevo=1) {
  let h = 1;
  for(let k=1; k<=kitevo; k++) {
    h *= alap;
  }
  return h;
}

console.log(hatvany(2, 0)); // 1
console.log(hatvany(2, 1)); // 2
console.log(hatvany(2)); // 2
console.log(hatvany(2, 2)); // 4
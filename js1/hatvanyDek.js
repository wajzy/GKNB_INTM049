console.log(hatvany(2, 0)); // 1
console.log(hatvany(2, 1)); // 2
console.log(hatvany(2, 2)); // 4
console.log(hatvany(3, 2)); // 9

function hatvany(alap, kitevo) {
  let h = 1;
  for(let k=1; k<=kitevo; k++) {
    h *= alap;
  }
  return h;
}
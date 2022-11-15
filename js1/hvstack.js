let m1 = [
  [11, 12],
  [21, 22]
];

let m2 = [
  [31, 32],
  [41, 42]
];

const hstack = function(a, b) {
  let stacked = [];
  for(let row=0; row<a.length; row++) {
    stacked.push(a[row].concat(b[row]));
  }
  return stacked;
}

function vstack(a, b) {
  return a.concat(b);
}

console.log(hstack(m1, m2));
/*
[
  [11, 12, 31, 32],
  [21, 22, 41, 42]
]
*/
console.log(vstack(m1, m2));
/*
[
  [11, 12],
  [21, 22],
  [31, 32],
  [41, 42]
]
*/
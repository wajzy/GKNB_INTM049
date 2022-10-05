let a = 1;
// let a = 2; SyntaxError: redeclaration of let a
const b = 1;
// const b = 2; SyntaxError: redeclaration of const b
var c = 1;
var c = 2;
console.log(c); // 2

const muvelet = (n, m) => n + m;
//const muvelet = (n, m) => n * m; SyntaxError: redeclaration of const muvelet
function fv(n) {
  return n + 1;
}
function fv(n) {
  return n * n;
}
console.log(fv(3)); // 9


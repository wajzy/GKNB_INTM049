const m = 8;
let str;
for(let s=0; s<m; s++) {
  str = "";
  for(let o=0; o<m; o++) {
    str += (s+o)%2?"*":" ";
  }
  console.log(str);
}
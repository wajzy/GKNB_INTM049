const m = 5;
let str;
for(let s=0; s<m; s++) {
  str = "";
  for(let o=0; o<m; o++) {
    str += (s==o||s==m-1-o)?"*":" ";
  }
  console.log(str);
}
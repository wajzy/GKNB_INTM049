const lnko = (a, b) => {
  if(a%b == 0) {
    return b;
  } else {
    return lnko(b, a%b);
  }
}

console.log(lnko(5, 15)) // 5
console.log(lnko(1071, 462)) // 21

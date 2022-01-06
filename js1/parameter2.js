const negyzet = alap => {
  if(typeof(alap)=="number") {
    return alap*alap;
  } else {
    return;
  }
}

console.log(negyzet(3)); // 9
console.log(negyzet()); // undefined
console.log(negyzet("Micimackó")); // undefined
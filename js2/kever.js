const kever = tomb => {
  for(let i=tomb.length-1; i>=1; i--) {
    let j = Math.floor(Math.random()*(i+1));
    let csere = tomb[i]; tomb[i] = tomb[j]; tomb[j] = csere;
  }
  return tomb;
}
console.log(kever(['A', 'l', 'm', 'a']))
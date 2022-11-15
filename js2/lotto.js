console.log((function() {
  let lotto = new Set();
  while(lotto.size != 5) {
    lotto.add(Math.floor(Math.random()*90) + 1);
  }
  return Array.from(lotto).sort((a, b) => a - b);
})());
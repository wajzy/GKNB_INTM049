const hatvany = (kitevo) => {
  return alap => {
    let h = 1;
    for(let k=1; k<=kitevo; k++) {
        h *= alap;
    }
    return h;
  };
};
const negyzet = hatvany(2);
const kob = hatvany(3);
console.log(negyzet(3)); // 9
console.log(kob(5)); // 125
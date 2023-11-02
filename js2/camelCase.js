console.log((function(szavak) {
  let nev = "";
  for(let szo of szavak) {
    nev += szo[0].toUpperCase() + szo.toLowerCase().slice(1);
  }
  return nev[0].toLowerCase() + nev.slice(1);
})(["EGY", "ketto", "hArOm"]))

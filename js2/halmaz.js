let betuk = new Set("abrakadabra");
console.log(betuk); // Set(5) [ "a", "b", "r", "k", "d" ]

let szavak = new Set(["alma", "barack", "citrom", "barack", "alma"]);
for(let szo of szavak) {
  console.log(szo); // alma barack citrom
}

console.log(Array.from(szavak)); 
  // Array(3) [ "alma", "barack", "citrom" ]

let ures = new Set();
console.log(ures.size == 0 ? "Üres" : "Vannak elemei"); // Üres
ures.add(1);
ures.add(1);
ures.add(2);
console.log(ures); // Set [ 1, 2 ]
ures.delete(2);
console.log(ures.has(2) ? "Van benne 2" : "Nincs benne 2"); 
  // Nincs benne 2
ures.clear();
console.log(ures); // Set []
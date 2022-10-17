const hallgato = {
  "a1b2c3": "Kovács István",
  "abc123": "Nagy Ilona"
};
console.log(`"a1b2c3" neve ${hallgato["a1b2c3"]}`); // Kovács István
console.log(`Van "abc123" kódú hallgató? ${"abc123" in hallgato}`); // true
console.log(`Van "toString" kódú hallgató? ${"toString" in hallgato}`);
  // true !!!
console.log(`"a1b2c3" saját tulajdonság? ` +
  `${hallgato.hasOwnProperty("a1b2c3")}`); // true
console.log(`"toString" saját tulajdonság? ` + 
  `${hallgato.hasOwnProperty("toString")}`); // false
console.log(Object.keys(hallgato)); // ["a1b2c3", "abc123"]

const hallgato2 = Object.create(null);
hallgato2["a1b2c3"] = "Kovács István";
hallgato2["abc123"] = "Nagy Ilona";
console.log(`Van "abc123" kódú hallgató? ${"abc123" in hallgato2}`);
  // true
console.log(`Van "toString" kódú hallgató? ${"toString" in hallgato2}`);
  // false

const asszociativ = {
  "123": "érték"
};
console.log(asszociativ["123"]); // érték
console.log(asszociativ[123]); // érték !!!
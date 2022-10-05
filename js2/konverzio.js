console.log(12.3 + 4); // 16.3
console.log("12.3" + 4); // "12.34"
console.log(parseFloat("12.3") + 4); // 16.3
console.log(parseInt("12.3") + 4); // 16
console.log(+"12.3" + 4); // 16.3
console.log(parseInt("0xFF", 16)); // 255
console.log(parseInt("FF", 16)); // 255
console.log(parseInt("12szamár")); // 12
console.log(parseInt("szamár12")); // NaN
console.log("12.3".toString()); // "12.3"
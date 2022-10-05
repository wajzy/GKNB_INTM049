console.log("JavaScript".charAt(0)); // J
console.log("JavaScript"[1]); // a
let js = "ABC"; js[0]="X"; console.log(js); // ABC -> immutable
console.log("JavaScript".indexOf("a")); // 1
console.log("JavaScript".indexOf("Script")); // 4
console.log("JavaScript".indexOf("a", 2)); // 3
console.log("JavaScript".indexOf("C++")); // -1
console.log("JavaScript".lastIndexOf("a")); // 3
console.log("JavaScript".lastIndexOf("a", 2)); // 1

console.log("JavaScript".slice(4)); // "Script"
console.log("JavaScript".slice(0, 4)); // "Java"
console.log("JavaScript".slice(0, -6)); // "Java"
console.log("JavaScript".slice(-6)); // "Script"

console.log("I ".concat("love ", "concat ", "so ", "much")); 
// I love concat so much
console.log("but " + "+/+= " + "operators " + "are " + "quicker!"); 
// but +/+= operators are quicker!
console.log("JavaScript".toLowerCase()); // javascript
console.log("JavaScript".toUpperCase()); // JAVASCRIPT

console.log("[", "   JS   ".trimStart(), "]"); // [ JS    ]
console.log("[", "   JS   ".trim(), "]"); // [ JS ]
console.log("[", "   JS   ".trimEnd(), "]"); // [    JS ]
let tomb = "a-b-c".split("-");
console.log(tomb); // [ "a", "b", "c" ]
console.log("<ul><li>" + tomb.join("</li><li>") + "</li></ul>");
// <ul><li>a</li><li>b</li><li>c</li></ul>
console.log(tomb.join("")); // abc
console.log(tomb.join()); // a,b,c

console.log("[", "3".padStart(3), "]"); // [   3 ]
console.log("[", "3".padStart(3, "0"), "]"); // [ 003 ]
console.log("[", "3".padEnd(3), "]"); // [ 3   ]
console.log("bla".repeat(3)); // blablabla
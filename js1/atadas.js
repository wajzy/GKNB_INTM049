function valtoztat(a, b, c)
{
  a = a * 10;
  b.tag = "megváltozott";
  c = {tag: "megváltozott"};
}

var szam = 10;
var obj1 = {tag: "eredeti"};
var obj2 = {tag: "eredeti"};

valtoztat(szam, obj1, obj2);

console.log(szam); // 10
console.log(obj1.tag); // megváltozott
console.log(obj2.tag); // eredeti
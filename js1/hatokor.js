let a = 1; // globális
{
  let a = 2; // elfedés, lokális
  let b = 3; // lokális
  var c = 4; // globális
  console.log(`a=${a}, b=${b}, c=${c}`); // a=2, b=3, c=4
}
//console.log(`a=${a}, b=${b}, c=${c}`); // ReferenceError: b is not defined
console.log(`a=${a}, c=${c}`); // a=1, c=4
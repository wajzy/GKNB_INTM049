const sin = function(x) {
  const EPS = 10e-6;
  let sign = +1;
  let nom = x;
  let denom = 1;
  let lastMul = 1;
  let prev, cur, diff;
  
  prev = (sign*nom)/denom;
  do {
    sign *= -1;
    nom = nom * x * x;
    denom = denom * (lastMul+1) * (lastMul+2);
    lastMul += 2;
    cur = prev + (sign*nom)/denom;
    diff = cur-prev;
    if(diff < 0) diff *= -1;
    prev = cur;
  } while(diff > EPS);
  return cur;
}

console.log(sin(3.1415 / 2));
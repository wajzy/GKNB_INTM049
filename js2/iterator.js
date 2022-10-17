for(elem of ['A', 'B', 'C']) {
  console.log(elem); // A B C
}
for(betu of "JS") {
  console.log(betu); // J S
}
const JSiterator = "JS"[Symbol.iterator]();
console.log(JSiterator.next()); // { value: "J", done: false }
console.log(JSiterator.next()); // { value: "S", done: false }
console.log(JSiterator.next()); // { value: undefined, done: true }

class Intervallum {
  constructor(tol, ig, lepes=1) {
    this.tol = tol;
    this.ig = ig;
    this.lepes = lepes;
  }
  [Symbol.iterator]() {
    return new IntervallumIterator(this);
  }
}

class IntervallumIterator {
  constructor(intervallum) {
    this.aktualis = intervallum.tol;
    this.intervallum = intervallum;
    this.elojel = intervallum.lepes>=0 ? +1 : -1;
  }
  next() {
    if(this.aktualis*this.elojel < this.intervallum.ig) {
      const eredmeny = { value: this.aktualis, done: false };
      this.aktualis += this.intervallum.lepes;
      return eredmeny;
    } else {
      return { value: undefined, done: true };
    }
  }
}

for(elem of new Intervallum(0, 10, 2)) {
  console.log(elem); // 0 2 4 6 8
}
for(elem of new Intervallum(5, 0, -1)) {
  console.log(elem); // 5 4 3 2 1
}
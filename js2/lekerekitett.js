class Teglalap {
  constructor(mag, szel, kitoltott=false) {
    this.mag = mag;
    this.szel = szel;
    this.kitoltott = kitoltott;
  }
  karakter(sor, oszlop) {
    return (this.kitoltott || sor==0 || sor==this.mag-1 || oszlop==0 || oszlop==this.szel-1) ? '*' : ' ';
  }
  rajz() {
    let abra='';
    for(let s=0; s<this.mag; s++) {
      for(let o=0; o<this.szel; o++) {
        abra += this.karakter(s, o);
      }
      abra += '\n';
    }
    return abra;
  }
}

class LekerekitettTeglalap extends Teglalap {
  constructor(mag, szel, kitoltott=false, sugar=1) {
    super(mag, szel, kitoltott);
    this.sugar = sugar;
  }
  karakter(sor, oszlop) {
    if((sor<this.sugar || sor>=this.mag-this.sugar) && (oszlop<this.sugar || oszlop>=this.szel-this.sugar)) {
      const y = (sor<this.sugar) ? this.sugar-sor : this.sugar-this.mag+sor+1;
      const x = (oszlop<this.sugar) ? this.sugar-oszlop : this.sugar-this.szel+oszlop+1;
      const tav = Math.round(Math.sqrt(x*x + y*y));
      if(this.kitoltott) {
        return (tav <= this.sugar) ? '*' : ' ';
      } else {
        return (tav == this.sugar) ? '*' : ' ';
      }
    } else {
      return super.karakter(sor, oszlop);
    }
  }
}

console.log(new Teglalap(3, 5).rajz());
console.log(new Teglalap(3, 5, true).rajz());
console.log(new LekerekitettTeglalap(10, 10, false, 3).rajz());
console.log(new LekerekitettTeglalap(5, 10, true, 3).rajz());

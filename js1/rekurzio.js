const hatvany = function(alap, kitevo) {
    if(kitevo == 0) return 1;
    if(kitevo == 1) return alap;
    let h = hatvany(alap, (kitevo-kitevo%2)/2);
    h *= h;
    if(kitevo%2) {
        h *= alap;
    }
    return h;
}
console.log(hatvany(5, 3)); // 125
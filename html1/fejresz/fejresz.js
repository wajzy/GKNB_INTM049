window.onload = function() {
  var szinek = ["white", "black"];
  var idx = 0;
  setInterval(function() {
    idx = 1-idx;
    document.body.style="background-color: "+szinek[idx];
  }, 1000);
}

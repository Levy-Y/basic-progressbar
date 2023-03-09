var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elems = document.getElementsByClassName("progrbarinside");
    var width = 0;
    var id = setInterval(frame, 70);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        document.getElementById("myImage").style.display = "inline";
      } else {
        width++;
        for (var j = 0; j < elems.length; j++) {
          elems[j].style.width = width + "%";
          elems[j].innerHTML = width + "%";
        }
      }
    }
  }
}

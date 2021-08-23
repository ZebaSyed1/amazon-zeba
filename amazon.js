function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "main") {
      x.className += " responsive";
    } else {
      x.className = "main";
    }
  
alert( 'Hello, world!' );
function myFunction() {
  var x = document.getElementsByClassName("active-pastille");
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

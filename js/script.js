const gigw = document.getElementsByClassName("gigw");

const scroll = document.querySelector("#scroll");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    scroll.style.display = "block";
  } else {
    scroll.style.display = "none";
  }
}
scroll.addEventListener('click', function(){
    document.documentElement.scrollTop = 0;
})
window.onload = function() {
  var menuButton = document.getElementById("open-menu");
  menuButton.click();
};



/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.scrollY;
window.onscroll = function () {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    gigw[0].style.top = "0";
  } else {
    gigw[0].style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
};

let hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", showHamburger);
function showHamburger () {
  let mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.toggle("mobile-menu-animation");

}
let imas = document.getElementById("imas");
imas.addEventListener("click", showX);
function showX () {
  let mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.toggle("mobile-menu-animation");

}
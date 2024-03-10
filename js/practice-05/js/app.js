function openMobileNav() {
  var nav = document.getElementById("mobile-menu");
  var close_icon = document.getElementsByClassName("close");
  var close_overlay = document.getElementsByClassName("overlay");
  nav.classList.add("active");
  close_icon[0].classList.add("active");
  close_overlay[0].classList.add("active");
}
function closeMobileNav() {
  var nav = document.getElementById("mobile-menu");
  var close_icon = document.getElementsByClassName("close");
  var close_overlay = document.getElementsByClassName("overlay");
  nav.classList.remove("active");
  close_icon[0].classList.remove("active");
  close_overlay[0].classList.remove("active");
}

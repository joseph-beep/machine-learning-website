function toggleHamburger() {
  var hamburgerMenu = document.getElementById("hamburger-menu");

  if (hamburgerMenu.style.display == "none") {
    hamburgerMenu.style.display = "inherit";
  }
  else {
    hamburgerMenu.style.display = "none";
  }
}
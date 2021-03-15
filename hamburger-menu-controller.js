function toggleHamburger() {
  var hamburgerMenu = document.getElementById("hamburger-menu");
  var hamburgerButton = document.getElementById("hamburger-button");

  if (hamburgerMenu.style.width == "40%") {
    hamburgerMenu.style.width = "0%";
    hamburgerMenu.style.opacity = "0";

    hamburgerButton.innerHTML = "<p>☰ Menu</p>";
  }
  else {
    hamburgerMenu.style.width = "40%";
    hamburgerMenu.style.opacity = "1";

    hamburgerButton.innerHTML = "<p>🞩 Close</p>";
  }
}
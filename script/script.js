document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu");
  const navbarLinks = document.getElementById("navbar-links");

  menuButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
  });
});

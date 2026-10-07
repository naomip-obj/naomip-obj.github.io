const menuButton = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-menu a");

if (menuButton && mobileMenu) {
  function setMenu(open) {
    document.body.classList.toggle("menu-open", open);
    mobileMenu.classList.toggle("is-open", open);
    mobileMenu.setAttribute("aria-hidden", String(!open));
    menuButton.setAttribute("aria-expanded", String(open));
  }

  menuButton.addEventListener("click", () => {
    setMenu(!mobileMenu.classList.contains("is-open"));
  });

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => setMenu(false));
  });
}

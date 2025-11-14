// mobileMenu.js

function initMobileMenu() {
  const line1 = document.getElementById("line1");
  const line2 = document.getElementById("line2");
  const line3 = document.getElementById("line3");
  const lines = document.getElementById("lines");
  const menu = document.getElementById("menu");

  if (!lines || !menu) return; // sécurité si elements non trouvés

  let menuOpen = false;

  lines.addEventListener("click", () => {
    menuOpen = !menuOpen;

    // Animation burger
    if (menuOpen) {
      line1.style.transform = "rotate(45deg) translate(3px, 3px)";
      line2.style.display = "none";
      line3.style.transform = "rotate(-45deg) translate(3px, -3px)";
      menu.style.transform = "translateX(0%)"; // menu visible
    } else {
      line1.style.transform = "rotate(0)";
      line2.style.display = "block";
      line3.style.transform = "rotate(0)";
      menu.style.transform = "translateX(100%)"; // menu caché
    }
  });
}

// Attendre que le header soit injecté
document.addEventListener("DOMContentLoaded", () => {
  const observer = new MutationObserver(() => {
    if (document.getElementById("lines")) {
      initMobileMenu();
      observer.disconnect();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
});


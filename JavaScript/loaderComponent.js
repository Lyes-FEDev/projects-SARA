// Add the HEADER & FOOTER to pages
// By Lyes MEDJAHED

import { calculation } from "./cartCounter.js";

async function loadLayout() {
  try {
    // =====================
    // HEADER
    // =====================
    const headerResponse = await fetch("./components/componentHeader.html");
    const headerHTML = await headerResponse.text();
    const headerEl = document.getElementById("header");

    if (headerEl) {
      headerEl.innerHTML = headerHTML;

      // 🔥 IMPORTANT : mettre à jour le compteur APRÈS injection
      calculation();
    }

    // =====================
    // FOOTER
    // =====================
    const footerResponse = await fetch("./components/componentFooter.html");
    const footerHTML = await footerResponse.text();
    const footerEl = document.getElementById("footer");

    if (footerEl) {
      footerEl.innerHTML = footerHTML;
    }

    // =====================
    // MENU MOBILE
    // =====================
    const menuScript = document.createElement("script");
    menuScript.src = "./JavaScript/mobileMenu.js";
    menuScript.defer = true;
    document.body.appendChild(menuScript);

  } catch (error) {
    console.error("Erreur lors du chargement du layout :", error);
  }
}

document.addEventListener("DOMContentLoaded", loadLayout);

// =====================
// PAYMENT POPUP
// =====================
async function loadPaymentPopup() {
  try {
    const res = await fetch("./components/payment.html");
    const html = await res.text();
    document.body.insertAdjacentHTML("beforeend", html);
  } catch (error) {
    console.error("Erreur chargement payment popup :", error);
  }
}

document.addEventListener("DOMContentLoaded", loadPaymentPopup);

// =====================
// COMING SOON
// =====================
async function loadComingSoon() {
  const soonContainer = document.getElementById("soon");
  if (!soonContainer) return;

  try {
    const response = await fetch("./components/comingSoon.html");
    const html = await response.text();
    soonContainer.innerHTML = html;
  } catch (error) {
    console.error("Erreur Coming Soon :", error);
  }
}

document.addEventListener("DOMContentLoaded", loadComingSoon);

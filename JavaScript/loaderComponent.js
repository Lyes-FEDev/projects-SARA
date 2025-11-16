

// Add the HEADER & FOOTER to product pages
//By Lyes MEDJAHED 22-10-2025

async function loadLayout() {
  try {
    // Charger le header
    const headerResponse = await fetch("/components/componentHeader.html");
    const headerHTML = await headerResponse.text();
    document.getElementById("header").innerHTML = headerHTML;

     // 🔹 Mettre à jour le compteur après que le header soit injecté
    import('/JavaScript/cartCounter.js').then(module => {
      module.calculation();
    });

    // Charger le footer
    const footerResponse = await fetch("/components/componentFooter.html");
    const footerHTML = await footerResponse.text();
    document.getElementById("footer").innerHTML = footerHTML;

    // Charger le script du menu APRÈS insertion du header
    const menuScript = document.createElement("script");
    menuScript.src = "/JavaScript/mobileMenu.js";
    document.body.appendChild(menuScript);

  } catch (error) {
    console.error("Erreur lors du chargement des composants :", error);
  }
}

document.addEventListener("DOMContentLoaded", loadLayout);



//Payment Poup
// date: 27-10-2025, By Lyes MEDJAHED

fetch('/components/payment.html')
  .then(res => res.text())
  .then(html => {
      document.body.insertAdjacentHTML('beforeend', html);
      // Initialiser le popup pour tous les boutons "Buy now"
      document.querySelectorAll('.buy-now').forEach(btn => {
          initPaymentPopup(`${btn.id}`);
      });
  });


// By Lyes MEDJAHED - 11/11/2025
// Injecte dynamiquement la section "Coming Soon" dans les pages qui contiennent <div id="soon"></div>

async function loadComingSoon() {
  const soonContainer = document.getElementById("soon");
  if (!soonContainer) return; // S'il n'y a pas de zone #soon, on ne fait rien

  try {
    const response = await fetch("/components/comingSoon.html");
    if (!response.ok) throw new Error("Erreur de chargement du composant Coming Soon");

    const html = await response.text();
    soonContainer.innerHTML = html;

  } catch (error) {
    console.error("Erreur lors de l'injection du composant Coming Soon :", error);
  }
}

// Lancer automatiquement après le chargement du DOM
document.addEventListener("DOMContentLoaded", loadComingSoon);

import products from "./productsData.js";
import { initPaymentPopup } from "./paymentPopup.js";
import { calculation } from "./cartCounter.js";

// ==================
// CLASSE RENDER
// ==================
class RenderProducts {
  constructor(product) {
    this.product = product;
  }

  render() {
    const imageSrc = Array.isArray(this.product.img)
      ? this.product.img[0]
      : this.product.img;

    const container = document.createElement("div");
    container.classList.add("product-card");

    container.innerHTML = `
      <img src="${imageSrc}" alt="${this.product.productName}" class="productImg">

      <div class="product-details">
        <h3 class="product-name">${this.product.productName}</h3>
        <p class="product-price">${this.product.price}</p>
        <p class="product-sizes">${this.product.size}</p>
        <div class="product-colors"></div>
        <p class="product-description">${this.product.description}</p>

        <div class="buttonBloc">
          <button class="addTC">Add to cart</button>
          <button class="buy-now">Buy now!</button>
        </div>
      </div>
    `;

    // === COULEURS ===
    const colorsContainer = container.querySelector(".product-colors");
    if (Array.isArray(this.product.color)) {
      this.product.color.forEach((c) => {
        const dot = document.createElement("span");
        dot.classList.add("color-dot");
        dot.style.backgroundColor = c.code;
        dot.title = c.name;
        colorsContainer.appendChild(dot);
      });
    }

    // === ADD TO CART (UNE SEULE FOIS) ===
    const addButton = container.querySelector(".addTC");
    addButton.addEventListener("click", () => {
      addToCart(this.product);
    });

    return container;
  }
}

// ==================
// CHANGEMENT D’IMAGE
// ==================
function initColorSwitch(card, product) {
  const img = card.querySelector(".productImg");
  const dots = card.querySelectorAll(".color-dot");

  if (!img || dots.length === 0) return;

  img.src = product.img[0];
  dots[0].classList.add("active");

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      if (product.img[index]) {
        img.src = product.img[index];
      }
      dots.forEach(d => d.classList.remove("active"));
      dot.classList.add("active");
    });
  });
}

// ==================
// ADD TO CART (SÉCURISÉ)
// ==================
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existing = cart.find(
    item => item.productName === product.productName
  );

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  calculation();
}

// ==================
// CODE PRINCIPAL (CORRIGÉ POUR iOS)
// ==================
document.addEventListener("DOMContentLoaded", () => {
  const productSection = document.querySelector(".product-page");

  if (!productSection) return;

  productSection.innerHTML = "";

  const productName = productSection.dataset.product;
  const product = products.find(p => p.productName === productName);

  if (product) {
    const renderer = new RenderProducts(product);
    const card = renderer.render();
    productSection.appendChild(card);
    initColorSwitch(card, product);
  } else {
    productSection.innerHTML = "<p>Produit non trouvé.</p>";
  }

// PAYMENT POPUP et compteur
const buyNowButton = productSection.querySelector(".buy-now");
if (buyNowButton) {
  initPaymentPopup(buyNowButton); // On passe le bouton spécifique
}
calculation();
});
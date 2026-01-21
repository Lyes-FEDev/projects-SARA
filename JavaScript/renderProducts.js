import products from "./productsData.js";
import { initPaymentPopup } from './paymentPopup.js';
import { calculation } from "./cartCounter.js";

// === Classe de rendu des produits ===
class RenderProducts {
  constructor(product) {
    this.product = product;
  }

  render() {
    const imageSrc = Array.isArray(this.product.img)
      ? this.product.img[0] : this.product.img;

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

    // Ajout des pastilles de couleur
    const colorsContainer = container.querySelector(".product-colors");
    if (Array.isArray(this.product.color)) {
      this.product.color.forEach((c, index) => {
        const colorDot = document.createElement("span");
        colorDot.classList.add("color-dot");
        colorDot.style.backgroundColor = c.code || c;
        colorDot.title = c.name || c;
        colorsContainer.appendChild(colorDot);
      });
    }

    // ===  Bouton "Add to Cart" fonctionnel ===
    const addButton = container.querySelector(".addTC");
    addButton.addEventListener("click", () => {
      addToCart(this.product);
    });
    if (addButton) {
  addButton.addEventListener("click", () => {
    addToCart(this.product);
  });
}

    return container;
  }
}

// === Fonction pour changer d’image selon la couleur ===
function initColorSwitch(cardElement, product) {
  const productImg = cardElement.querySelector(".productImg");
  const colorDots = cardElement.querySelectorAll(".color-dot");

  if (!productImg || colorDots.length === 0) return;

  colorDots[0].classList.add("active");
  productImg.src = product.img[0];

  colorDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      if (product.img[index]) {
        productImg.src = product.img[index];
      }
      colorDots.forEach(d => d.classList.remove("active"));
      dot.classList.add("active");
    });
  });
}

// === Fonction ADD TO CART ===
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  const existing = cart.find(item => item.productName === product.productName);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));

  //alert(`${product.productName} a été ajouté au panier 🛒`);

  localStorage.setItem("cart", JSON.stringify(cart));
  
  calculation();
}

/*
//Add counter to basket icon
export function calculation() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const cartIcon = document.getElementById("cart-count");
  if(cartIcon){
      cartIcon.innerText = totalItems;
  }
}
*/

// === Code principal ===
const productSection = document.querySelector(".product-page");
productSection.innerHTML = "";

const productName = productSection.dataset.product;
const product = products.find(p => p.productName === productName);

if (product) {
  const render = new RenderProducts(product);
  const card = render.render();
  productSection.appendChild(card);
  initColorSwitch(card, product);
} else {
  productSection.innerHTML = "<p>Produit non trouvé.</p>";
}

// === Charger la popup paiement ===
async function loadPaymentPopup() {
  try {
    const response = await fetch('./components/payment.html');
    const html = await response.text();
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;

    const paymentSection = tempDiv.querySelector('.payment');
    if (paymentSection) {
      document.body.appendChild(paymentSection);
      console.log('✅ Payment popup injected into page');
      initPaymentPopup('.buy-now');
    }
  } catch (error) {
    console.error('❌ Error loading payment popup:', error);
  }
}

document.addEventListener('DOMContentLoaded', loadPaymentPopup);

calculation();
import { initPaymentPopup } from "https://lyes-fedev.github.io//paymentPopup.js";
import { calculation } from "https://lyes-fedev.github.io//cartCounter.js";

document.addEventListener('DOMContentLoaded', () => {
  const cartContainer = document.getElementById('cart-container');
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Afficher le compteur dès le chargement
  calculation();

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p class='panierVide'>Your basket is empty 😔</p>";
    return;
  }

  function renderCart() {
    cartContainer.innerHTML = cart.map((item, index) => {
      const imageSrc = Array.isArray(item.img) ? item.img[0] : item.img;
      return `
        <div class="shop-cart-details" data-index="${index}">
          <img src="${imageSrc}" alt="${item.productName}" class="product-img">
          <p class="product-name">${item.productName}</p>
          <span class="product-price">${item.price}</span>
          <div class="quantity">
            <button class="minus">-</button>
            <span class="quantity-number">${item.quantity}</span>
            <button class="plus">+</button>
          </div>
        </div>
      `;
    }).join('');
    
    // mettre à jour le compteur à chaque rendu
    calculation();
  }

  renderCart();

  cartContainer.addEventListener('click', (e) => {
    const target = e.target;
    const parent = target.closest('.shop-cart-details');
    if (!parent) return;

    const index = parseInt(parent.dataset.index);
    const item = cart[index];

    if (target.classList.contains('plus')) item.quantity++;
    if (target.classList.contains('minus')) {
      item.quantity--;
      if (item.quantity <= 0) cart.splice(index, 1);
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    // mettre à jour le compteur à chaque modification
    calculation();

    if (cart.length === 0) {
      cartContainer.innerHTML = "<p>Your basket is empty 😔</p>";
    } else {
      renderCart();
    }
  });

  initPaymentPopup('.buy-now');
});

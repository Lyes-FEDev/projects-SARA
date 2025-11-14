export function calculation() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const cartIcon = document.getElementById("cart-count");
  if(cartIcon){
      cartIcon.innerText = totalItems;
  }
}

document.addEventListener('DOMContentLoaded', calculation);
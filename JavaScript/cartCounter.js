
export function calculation() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartIcon = document.getElementById("cart-count");

  if (cartIcon) {
    cartIcon.innerText = totalItems;
  }
}

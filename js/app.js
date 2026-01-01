// main.js
import { articles } from "./data.js";
import { addToCart, updateUnits, removeItem } from "./cart.js";
import { renderArticles, renderCart, updateCartCount, renderCheckoutItems } from "./ui.js";
import { submitReservation } from "./email.js";

// Expose handlers globally for inline HTML onclick
window.addToCartHandler = function(id) {
  const item = articles.find(a => a.id === id);
  const size = item.sizes ? document.getElementById("size" + id).value : null;
  addToCart(item, size);
};

window.updateUnitsHandler = updateUnits;
window.removeItemHandler = removeItem;
window.submitReservation = submitReservation;

// Initial render
renderArticles();
renderCart();
updateCartCount();
renderCheckoutItems();
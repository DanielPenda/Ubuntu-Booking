// main.js
import { articles } from "./data.js";
import { addToCart, updateUnits, removeItem } from "./cart.js";
import { renderArticles, renderCart, updateCartCount, renderCheckoutItems, renderSocials } from "./ui.js";
import { submitReservation } from "./email.js";
import { initModal, openProductModal } from "./modal.js";

document.addEventListener("DOMContentLoaded", () => {
  // Expose handlers globally for inline HTML onclick
  window.addToCartHandler = function(id) {
    const item = articles.find(a => a.id === id);
    const size = item.sizes ? document.getElementById("size" + id).value : null;
    addToCart(item, size);
  };

  window.updateUnitsHandler = updateUnits;
  window.removeItemHandler = removeItem;
  window.submitReservation = submitReservation;
  window.openProductModal = openProductModal;

  // Render UI blocks
  renderArticles();
  renderCart();
  updateCartCount();
  renderCheckoutItems(); // now will find the element
  renderSocials();
  initModal();
});

// cart.js
import { cart, saveCart } from "./data.js";
import { renderCart, updateCartCount } from "./ui.js";

export function addToCart(item, size) {
  cart.push({ ...item, units: 1, size });
  saveCart();
  renderCart();
  updateCartCount();
}

export function updateUnits(index, value) {
  cart[index].units = parseInt(value);
  saveCart();
  renderCart();
}

export function removeItem(index) {
  cart.splice(index, 1);
  saveCart();
  renderCart();
  updateCartCount();
}
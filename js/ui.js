// ui.js
import { articles, cart } from "./data.js";
import { addToCart, updateUnits, removeItem } from "./cart.js";

export function updateCartCount() {
  const el = document.getElementById("cartCount");
  if (el) el.textContent = cart.length;
}

export function renderArticles() {
  const list = document.getElementById("articleList");
  if (!list) return;

  list.innerHTML = articles.map(a => `
    <div class="col-md-3 mb-4" data-aos="zoom-in">
      <div class="card p-3 text-center">
        <img src="${a.img}" class="img-fluid mb-2">
        <h5>${a.name}</h5>
        <p>€${a.price}</p>

        ${a.sizes ? `
          <select id="size${a.id}" class="form-select mb-2">
            ${a.sizes.map(s => `<option value="${s}">${s}</option>`).join("")}
          </select>` : ""}

        <button class="btn btn-outline-light mt-2" 
                ${a.stock === 0 ? "disabled" : ""}
                onclick="window.addToCartHandler(${a.id})">
          Add to Cart
        </button>
      </div>
    </div>
  `).join("");
}

export function renderCart() {
  const cartDiv = document.getElementById("cartItems");
  if (!cartDiv) return;

  let total = 0;

  cartDiv.innerHTML = cart.map((c, i) => {
    total += c.price * c.units;
    return `
      <div class="d-flex justify-content-between align-items-center mb-2 p-2 border border-secondary rounded">
        <div><img src="${c.img}" width="50"> ${c.name} ${c.size ? "- " + c.size : ""}</div>
        <div>€${c.price} x 
          <input type="number" min="1" value="${c.units}" style="width:50px"
                 onchange="window.updateUnitsHandler(${i}, this.value)">
        </div>
        <button class="btn btn-sm btn-danger" onclick="window.removeItemHandler(${i})">Remove</button>
      </div>
    `;
  }).join("");

  const totalEl = document.getElementById("cartTotal");
  if (totalEl) totalEl.textContent = total;
}

export function renderCheckoutItems() {
  const checkoutDiv = document.getElementById("checkoutItems");
  if (!checkoutDiv) return; // Only run on form.html

  if (cart.length === 0) {
    checkoutDiv.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  let total = 0;

  checkoutDiv.innerHTML = cart.map(c => {
    total += c.price * c.units;
    return `
      <div class="d-flex justify-content-between align-items-center mb-3 p-2 border border-secondary rounded">
        <div>
          <strong>${c.name}</strong> ${c.size ? `(${c.size})` : ""}
          <br>
          <small>Quantity: ${c.units}</small>
        </div>
        <div>€${c.price * c.units}</div>
      </div>
    `;
  }).join("");

  checkoutDiv.innerHTML += `
    <hr>
    <h4>Total: €${total}</h4>
  `;
}

export function renderSocials() {
document.getElementById("socials").innerHTML = `
<a href="https://www.instagram.com/ubuntu_barber9880?igsh=MWJtZzVpamZ0c2k3Yw%3D%3D&utm_source=qr" target="_blank">
  <img src="assets/icons/instagram.png">
</a>
<a href="https://www.facebook.com/Ubuntubarber9880?mibextid=wwXIfr" target="_blank">
  <img src="assets/icons/facebook.png">
</a>
<a href="https://www.tiktok.com/@ubuntu9880" target="_blank">
  <img src="assets/icons/tiktok.png">
</a>`;
}
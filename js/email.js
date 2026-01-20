// email.js
import { cart } from "./data.js";
import { renderCheckoutItems } from "./ui.js";

export function submitReservation() {
  const name = document.getElementById("custName")?.value.trim();
  const email = document.getElementById("custEmail")?.value.trim();
  const phone = document.getElementById("custPhone")?.value.trim();

  const btn = document.querySelector(".confirm-bar");

  if (!name || !email) {
    showMessage("Name and email are required.", "danger");
    return;
  }

  // UI loading state
  if (btn) {
    btn.disabled = true;
    btn.textContent = "Processing...";
  }

  const reservation_id = Math.floor(100000 + Math.random() * 900000);

  const templateParams = {
    name,
    email,
    phone,
    reservation_id,
    logo_url: "https://danielpenda.github.io/Ubuntu-Booking/assets/logo.png",

    reservations: cart.map(c => ({
      name: c.name,
      units: c.units,
      price: c.price,
      image_url: c.img
    })),

    cost: {
      total: cart.reduce((a, c) => a + c.price * c.units, 0).toFixed(2)
    }
  };

  emailjs
    .send("service_oaaop0e", "template_kwoxf17", templateParams)
    .then(() => {
      showMessage("Reservation confirmed! Check your email.", "success");

      cart.length = 0;
      localStorage.removeItem("cart");
      renderCheckoutItems();

      if (btn) btn.textContent = "Confirmed ✅";
      setTimeout(() => {
        window.location.href = "index.html";
      }, 2500);

    })
    .catch(() => {
      showMessage("Email failed. Please try again.", "danger");

      if (btn) {
        btn.disabled = false;
        btn.textContent = "Confirm Reservation";
      }
    });
}

/* ================= HELPERS ================= */

function showMessage(text, type) {
  const box = document.getElementById("comfimationMessage");
  if (!box) return;

  box.innerHTML = `
    <div class="alert alert-${type} fade show">
      ${text}
    </div>
  `;
}

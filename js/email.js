// email.js
import { cart } from "./data.js";
import { renderCheckoutItems } from "./ui.js";

export function submitReservation() {
  const name = document.getElementById("custName")?.value.trim();
  const email = document.getElementById("custEmail")?.value.trim();
  const phone = document.getElementById("custPhone")?.value.trim();

  if (!name || !email) {
    alert("Name and email are required.");
    return;
  }

  const reservation_id = Math.floor(Math.random() * 1000000);

  const templateParams = {
    name,
    email,
    phone,
    reservation_id,
    reservations: cart.map(c => ({
      name: c.name,
      units: c.units,
      price: c.price,
      img: c.img
    })),
    cost: { total: cart.reduce((a, c) => a + c.price * c.units, 0) }
  };

  emailjs.send("service_oaaop0e", "template_kwoxf17", templateParams)
    .then(() => {
      document.getElementById("comfimationMessage").innerHTML =
        `<div class="alert alert-success">
           Reservation confirmed! Check your email.
         </div>`;

      cart.length = 0;
      localStorage.removeItem("cart");
      renderCheckoutItems();
    })
    .catch(() => {
      document.getElementById("comfimationMessage").innerHTML =
        `<div class="alert alert-danger">
           Email failed. Please try again.
         </div>`;
    });
}
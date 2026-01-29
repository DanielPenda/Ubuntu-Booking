// data.js
export const articles = [
  {
    id:1,
    name:"T-Shirt",
    price:38.98,
    stock:20,
    type:"cloth",
    sizes:["S","M","L","XXL"],
    img:"https://danielpenda.github.io/Ubuntu-Booking/assets/tshirt.JPG",
    description:`Wear what you stand for.
Ubuntu isn’t printed — it’s lived.`
  },
  {
    id:2,
    name:"Key Chain",
    price:3.99,
    stock:20,
    type:"other",
    img:"https://danielpenda.github.io/Ubuntu-Booking/assets/keyChain.png",
    description:`Carry the reminder.
You are never alone.`
  },
  {
    id:3,
    name:"Sticker",
    price:0.50,
    stock:30,
    type:"other",
    img:"https://danielpenda.github.io/Ubuntu-Booking/assets/stickers.jpeg",
    description:`Mark your space.
Claim your identity.`
  },
  {
    id:4,
    name:"Complete Set",
    price:42.99,
    stock:5,
    type:"cloth", // IMPORTANT: includes T-shirt
    sizes:["S","L","XXL"],
    img:"https://danielpenda.github.io/Ubuntu-Booking/assets/set.png",
    description:`Everything in one box.
Wear it. Carry it. Live it.`
  }
];


export let cart = JSON.parse(localStorage.getItem("cart")) || [];

export function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}
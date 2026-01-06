// data.js
export const articles = [
  { id:1, name:"T-Shirt", price:38.98, stock:20, type:"cloth", sizes:["S","M","L","XxL"], img:"https://danielpenda.github.io/Ubuntu-Booking/assets/tshirt.JPG" },
  { id:2, name:"Key Chain", price:3.99, stock:20, type:"other", img:"https://danielpenda.github.io/Ubuntu-Booking/assets/keyChain.png" },
  { id:3, name:"Sticker", price:1.19, stock:30, type:"other", img:"https://danielpenda.github.io/Ubuntu-Booking/assets/stickers.jpeg" },
  { id:4, name:"Complete set", price:42.99, stock:5, type:"other", img:"https://danielpenda.github.io/Ubuntu-Booking/assets/set.png" }
];

export let cart = JSON.parse(localStorage.getItem("cart")) || [];

export function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}
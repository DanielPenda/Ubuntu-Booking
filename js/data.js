// data.js
export const articles = [
  { id:1, name:"T-Shirt", price:40, stock:10, type:"cloth", sizes:["S","M","L","XL"], img:"assets/tshirt.jpeg" },
  { id:2, name:"Key Chain", price:3.99, stock:20, type:"other", img:"assets/keychain.jpeg" },
  { id:3, name:"Sticker", price:1.19, stock:30, type:"other", img:"assets/stickers.jpeg" },
  { id:4, name:"Complete set", price:42.99, stock:5, type:"other", img:" assets/box.jpeg" }
];

export let cart = JSON.parse(localStorage.getItem("cart")) || [];

export function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}
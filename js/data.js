// data.js
export const articles = [
  { id:1, name:"T-Shirt", price:35, stock:10, type:"cloth", sizes:["S","M","L","XL"], img:"assets/tshirt.jpeg" },
  { id:2, name:"Key Chain", price:8, stock:20, type:"other", img:"assets/keychain.jpeg" },
  { id:3, name:"Stickers Pack", price:5, stock:30, type:"other", img:"assets/stickers.jpeg" },
];

export let cart = JSON.parse(localStorage.getItem("cart")) || [];

export function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}
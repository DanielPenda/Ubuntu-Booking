// modal.js
import { articles } from "./data.js";

let modal, closeBtn, modalImg, modalName, modalDesc;

export function initModal() {
  modal = document.getElementById("productModal");
  closeBtn = document.querySelector(".close-modal");
  modalImg = document.getElementById("modalImg");
  modalName = document.getElementById("modalName");
  modalDesc = document.getElementById("modalDesc");

  if (!modal || !closeBtn) return;

  closeBtn.onclick = () => closeModal();

  modal.onclick = (e) => {
    if (e.target === modal) closeModal();
  };
}

export function openProductModal(id) {
  if (!modal) return;

  const p = articles.find(a => a.id === id);
  if (!p) return;

  modalImg.src = p.img;
  modalName.textContent = p.name;
  modalDesc.textContent = p.description;

  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

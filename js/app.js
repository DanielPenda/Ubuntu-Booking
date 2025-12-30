const list = document.getElementById("productList");

products.forEach(p=>{
let sizes = p.type=="cloth" ? `
<select class="form-select mb-2" id="size-${p.id}">
${p.sizes.map(s=>`<option>${s}</option>`).join("")}
</select>` : "";

list.innerHTML += `
<div class="col-md-3 mb-4" data-aos="fade-up">
<div class="card p-3 text-center">
<h5>${p.name}</h5>
<p>€${p.price}</p>
${p.stock==0?'<span class="text-danger">Out of Stock</span>':''}
${sizes}
<button class="btn btn-outline-light" ${p.stock==0?'disabled':''} onclick="reserve(${p.id})">Reserve</button>
</div>
</div>`;
});

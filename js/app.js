emailjs.init("3LHYGRO3V_-jZ2cf-"); // Public key

let articles = [
 {id:1,name:"T-Shirt",price:30,stock:10,img:"assets/tshirt.jpeg",sizes:true},
 {id:2,name:"Key Chain",price:8,stock:20,img:"assets/keychain.jpeg"},
 {id:3,name:"Stickers",price:5,stock:50,img:"assets/stickers.jpeg"},
 {id:4,name:"Complete Box",price:40,stock:5,img:"assets/box.jpeg"}
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount(){
 document.getElementById("cartCount").textContent = cart.length;
}

function renderArticles(){
 const list = document.getElementById("articleList");
 list.innerHTML = "";
 articles.forEach(a=>{
   list.innerHTML += `
   <div class="col-md-3 mb-4" data-aos="zoom-in">
    <div class="card p-3 text-center">
     <img src="${a.img}" class="img-fluid mb-2">
     <h5>${a.name}</h5>
     <p>€${a.price}</p>
     ${a.stock==0?'<span class="text-danger">Out of stock</span>':''}
     ${a.sizes?'<select id="size'+a.id+'" class="form-select mb-2"><option value="S">S</option><option value="M">M</option><option value="L">L</option></select>':''}
     <button onclick="addToCart(${a.id})" class="btn btn-outline-light mt-2" ${a.stock==0?'disabled':''}>Add to Cart</button>
    </div>
   </div>`;
 });
}

function addToCart(id){
 let item = articles.find(a=>a.id===id);
 let size = item.sizes?document.getElementById("size"+id).value:null;
 let cartItem = {...item, units:1, size:size};
 cart.push(cartItem);
 localStorage.setItem("cart",JSON.stringify(cart));
 renderCart();
 updateCartCount();
}

function renderCart(){
 const cartDiv = document.getElementById("cartItems");
 cartDiv.innerHTML="";
 let total = 0;
 cart.forEach((c,i)=>{
   total += c.price * c.units;
   cartDiv.innerHTML += `
   <div class="d-flex justify-content-between align-items-center mb-2 p-2 border border-secondary rounded">
    <div><img src="${c.img}" width="50"> ${c.name} ${c.size?'- '+c.size:''}</div>
    <div>€${c.price} x <input type="number" min="1" value="${c.units}" style="width:50px" onchange="updateUnits(${i},this.value)"></div>
    <div><button class="btn btn-sm btn-danger" onclick="removeItem(${i})">Remove</button></div>
   </div>`;
 });
 document.getElementById("cartTotal").textContent = total;
}

function updateUnits(index,value){
 cart[index].units = parseInt(value);
 localStorage.setItem("cart",JSON.stringify(cart));
 renderCart();
}

function removeItem(index){
 cart.splice(index,1);
 localStorage.setItem("cart",JSON.stringify(cart));
 renderCart();
 updateCartCount();
}

// Reservation submission using EmailJS
function submitReservation(){
 if(cart.length===0){alert("Your cart is empty!"); return;}
 let name = prompt("Enter your name:");
 let email = prompt("Enter your email:");
 let phone = prompt("Enter your phone number:");
 if(!name || !email){alert("Name and email required."); return;}
 let reservation_id = Math.floor(Math.random()*1000000);
 let templateParams = {
   name:name,
   email:email,
   reservation_id:reservation_id,
   reservations: cart.map(c=>({
     name:c.name,
     units:c.units,
     price:c.price,
     img:c.img
   })),
   cost:{total: cart.reduce((a,c)=>a+c.price*c.units,0)}
 };

 emailjs.send('service_oaaop0e','template_kwoxf17',templateParams)
 .then(function(response){
   alert("Reservation confirmed! Check your email.");
   cart = [];
   localStorage.removeItem("cart");
   renderCart();
   updateCartCount();
 }, function(error){
   alert("Email failed. Try again.");
 });
}

renderArticles();
renderCart();
updateCartCount();

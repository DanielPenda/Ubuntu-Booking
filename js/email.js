emailjs.init("3LHYGRO3V_-jZ2cf-"); // Public key

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

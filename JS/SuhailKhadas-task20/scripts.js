let cart = [];

document.querySelector('.service-list').addEventListener('click', function(event){
  if(!event.target.classList.contains('add-to-cart-btn')) return;
  
  
  let btn=event.target;
  let row=btn.closest('.service-row');
  let name=row.querySelector('.service-name').textContent;
  let price = parseFloat(row.querySelector('.service-price').textContent.replace('₹', ''));

  if (btn.textContent == 'Add Item') {
    cart.push({name, price});
    btn.textContent = 'Remove Item';
  } else {
    cart = cart.filter(i => i.name != name);
    btn.textContent = 'Add Item';
  }
  update();
});


function update() {

  let tbody = document.getElementById('cart-items');
  tbody.innerHTML = '';
  let tot = 0;
  let sno = 1;
  cart.forEach(i => {
    let tr = `<tr><td>${sno++}</td><td>${i.name}</td><td>₹${i.price}</td></tr>`;
    tbody.innerHTML += tr;
    tot += i.price;
  });
  document.getElementById('total-amount').textContent = `₹${tot}`;
}


(function() {
    emailjs.init({
        publicKey: "yW7xU8iVc0tC15p9k",
    });
})();

window.onload = function () {
    const form = document.getElementById('contact-form');
    const message = document.getElementById('book-section');
    const name= document.getElementById('input-name');
    const phone= document.getElementById('input-number');
    const email=document.getElementById('input-email');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        message.innerHTML = "<p>Waiting For Confirmation...</p>";
      if(cart.length===0){
           message.innerHTML = "<p>Enter Details</p>";
        return;
      }
      if (name.value.length === 0 || email.value.length === 0 || phone.value.length === 0) {
        message.innerHTML = "<p>Please fill all details</p>";
        alert("Please fill all details");
        return;
      }
      if (!email.value.includes("@")) {
        message.innerHTML = "<p>Enter valid email</p>";
        alert("Enter valid email");
        return;
      }
      if (phone.value.length != 10) {
        message.innerHTML = "<p>Enter valid 10 digit phone number</p>";
        alert("Enter valid 10 digit phone number");

        return;
        }
      emailjs.sendForm('service_2oufhxf', 'template_yl5h0bv', this)
            .then(() => {
                setTimeout(function () {
                    message.innerHTML = "<p>Thank you For Booking the Service We will get back to you soon!</p>";
                    alert("Thank you For Booking the Service We will get back to you soon!");
                }, 3000);
            })
            .catch((error) => {
                message.innerHTML = "<p>Booking failed. Please try again.</p>";
                console.log('FAILED...', error);
                alert("Email failed: " + error.text);
            });

      

    });
};





document.querySelector('.hero-section button').onclick = function() {
  document.querySelector('.topleft-block').scrollIntoView({behavior: 'smooth'});
};





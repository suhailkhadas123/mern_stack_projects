
const services=[
    {name:'Dry Cleaning',price:200, image:'images/drycleaning.png'},
    {name:'leather & Suede Cleaning',price:999,  image:'images/leather.png'},
    {name:'Ironing',price:30, image:'images/ironing.png'},
    {name:'Weeding dress',price:500, image:'images/weeding-dress.png'},
    {name:'Washand Fold',price:300, image:'images/washmfold.png'},
    {name:'Stain removal',price:300, image:'images/stain_removal.png'}
]
const selectElement=document.getElementById('services');
services.forEach(service=>{
    const option=document.createElement('option');

    option.value = service.name;
    option.textContent = service.name;
    selectElement.appendChild(option);
});

    
const cart=[]
const bookSection = document.getElementById('book-section');

function book(){
    if(cart.length==0){
        bookSection.innerHTML = '<p id="book-alert">Please add items to the cart before booking.</p>';
    }
    else{
         bookSection.innerHTML = '<p id="book-alert-success">Booking confirmed!</p>';
    }
}
function addtoCart(item,price){
    const SelectedValue= document.getElementById('services').value; 
    const selectService=services.find(service=>service.name===SelectedValue);
    cart.push({
        name:selectService.name,
        price:selectService.price
    });
    if (selectElement.selectedIndex < selectElement.options.length - 1) {
    selectElement.selectedIndex++;
}
    updateCartUI();
    showSelectedImage()
}
function updateCartUI(){
    const cartItemDiv= document.getElementById('cart-items');
    cartItemDiv.innerHTML='';
    if(cart.length==0){
        cartItemDiv.innerHTML='<p id="empty-cart">No items added</p>';
    }
    else{
            cart.forEach(item => {
                const row = document.createElement('tr');

                const nameCell = document.createElement('td');
                nameCell.textContent = item.name;

                const priceCell = document.createElement('td');
                priceCell.textContent = "₹" + item.price;

                row.appendChild(nameCell);
                row.appendChild(priceCell);

                cartItemDiv.appendChild(row);
            });
        
    }
    upodateAmount();
}
function upodateAmount(){
    let total=0;
    cart.forEach(item=>{
        total+=item.price;
    });
    document.getElementById('total-amount').textContent=' '+total;
}
function skipItem() {
  const selectElement = document.getElementById('services');

  if (selectElement.selectedIndex < selectElement.options.length - 1) {
    selectElement.selectedIndex++;
  } else {
    selectElement.selectedIndex = 0;
  }
  showSelectedImage()
}

const imageElement = document.getElementById('service-image');

function showSelectedImage() {
    const selectedValue = selectElement.value;

    const selectedService = services.find(service => service.name === selectedValue);

    if (selectedService) {
        imageElement.src = selectedService.image;
        imageElement.alt = selectedService.name;
    }
    else{

    }
}
selectElement.addEventListener('change', showSelectedImage);
window.onload= function(){
    defaultImage();
}
function defaultImage(){
    const defaultImage=document.getElementById('service-section');
    imageElement.src = 'images/ironing.png';
    imageElement.alt = 'Ironing';
    
}
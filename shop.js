//cart

let cartIcon = document.querySelector(".cart_icon");
let cartTab = document.querySelector(".cartTab");
let cartClose = document.querySelector(".close");

//open cart
cartIcon.onclick = () =>{
    cartTab.classList.add("active");
};
//close cart
cartClose.onclick = () =>{
    cartTab.classList.remove("active");
};

//cart working
if(document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready);
}else{
    ready();
}

//making function

function ready() {
    //remove items from cart
    var removeCartButtons = document.getElementsByClassName("cartItemRemove");
    console.log(removeCartButtons);
    for (var i = 0; i<removeCartButtons.length; i++){
        var button = removeCartButtons[i];
        button.addEventListener("click", removeCartItem);
    }
    //quantity change
    var quantityInputs = document.getElementsByClassName("cartItemQuantity");
    for (var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }
    //add to cart
    var addCart = document.getElementsByClassName("AddToCart_button");
    for (var i = 0; i < addCart.length; i++){
        var button = addCart[i];
        button.addEventListener("click", addCartClicked);
    }
}

//remove items from cart
function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.closest(".cartBox").remove();
    updateTotal()
}

//quantity change
function quantityChanged(event){
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updateTotal();
}

//add cart
function addCartClicked(event){
    var button = event.target;
    var shopPoduct = button.closest(".product_details");
    var title = shopPoduct.querySelector(".product_name").innerText;
    var price = shopPoduct.querySelector(".product_price").innerText.replace("Price : $", "");
    var productImage = shopPoduct.querySelector(".shopItem img").src;
    addProductToCart(title, price, productImage);
    updateTotal();
}

function addProductToCart(title, price, productImage){

    var cartItems = document.querySelector(".cartContent");
    var cartItemsNames = cartItems.getElementsByClassName("cartItemName");
    
    for (var i = 0; i < cartItemsNames.length; i++){
        if (cartItemsNames[i].innerText == title) {
            //increase quantity
            var quantityInput = cartItemsNames[i].closest(".cartBox").querySelector(".cartItemQuantity");
            quantityInput.value = parseInt(quantityInput.value) + 1;
             updateTotal();
             return;
        }
    }
    var cartShopBox = document.createElement("div");
        cartShopBox.classList.add("cartBox");
    
        var cartBoxContent = `
                                <img src="${productImage}" alt="${title}" class="cartItemImage">
                                <div class="detailBox">
                                    <div class="cartItemName">${title}</div>
                                    <div class="cartItemPrice">$${price}</div>
                                    <input type="number" value="1" class="cartItemQuantity">
                                </div>
                                <svg class="cartItemRemove" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z" clip-rule="evenodd"/>
                                </svg>`;
    
        cartShopBox.innerHTML = cartBoxContent;
        cartItems.append(cartShopBox);
    
        cartShopBox.querySelector(".cartItemRemove").addEventListener("click", removeCartItem);
        cartShopBox.querySelector(".cartItemQuantity").addEventListener("change", quantityChanged);
       
        updateTotal();
}

function addCartClicked(event) {
    var button = event.target;
    var shopProduct = button.closest(".product_details");
    var title = shopProduct.querySelector(".product_name").innerText;
    var price = shopProduct.querySelector(".product_price").innerText.replace("Price : $", "");
    var productImage = shopProduct.querySelector(".shopItem img").src;

    addProductToCart(title, price, productImage);

    // Change button text to "Added to Cart"
    button.innerText = "Added to Cart";
    button.disabled = true; // Optional: Disable the button
    button.style.backgroundColor = "#022b3a"; // Optional: Change background color
    button.style.color = "#eeeaea"

    updateTotal();
}



function updateTotal(){
    var cartContent = document.querySelector(".cartContent");
    var cartBoxes = cartContent.querySelectorAll(".cartBox");
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.querySelector(".cartItemPrice");
        var quantityElement = cartBox.querySelector(".cartItemQuantity");
        
        console.log("Price Element:", priceElement);
        console.log("Price Text:", priceElement.innerText);
        console.log("Quantity Element:", quantityElement);
        console.log("Quantity Value:", quantityElement.value);
        
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = parseInt(quantityElement.value);

        console.log("Parsed Price:", price);
        console.log("Parsed Quantity:", quantity)

        total = total + (price * quantity);
    }
    // Rounding the total to two decimal places
    total = Math.round(total * 100) / 100;

    console.log("Total:", total);

    document.querySelector(".totalPrice").innerText = "$" + total;
}
var checkoutTabOpen = document.getElementById("checkoutPage");
let checkout = document.querySelector(".checkout");
var checkoutTabClose = document.querySelector(".closeCheckout");
var backdrop = document.querySelector(".backdrop");
var keepShopping = document.querySelector(".keepShopping");

//open checkout
checkout.onclick = () =>{

    let total = document.getElementsByClassName('totalPrice')[0].innerText.replace(/[^0-9]/g, '')

    if (total == 0) {
        alert("You should add products to the cart first.")
        return
    }
    checkoutTabOpen.classList.add("active");
    backdrop.classList.add("show");
    cartTab.classList.remove("active");
};

//close checkout
checkoutTabClose.onclick = () =>{
    checkoutTabOpen.classList.remove("active");
    backdrop.classList.remove("show");
};

//close checkout
keepShopping.onclick = () =>{
    checkoutTabOpen.classList.remove("active");
    backdrop.classList.remove("show");
};

document.querySelector('.pay').onclick = function() {
    let name = document.getElementById('inputfname').value.toString().trim()
    let phoneNo = document.getElementById('inputphone').value.toString().trim()
    let email = document.getElementById('inputemail').value.toString().trim()

    if(name == ''){
        alert("You should enter your name.")
        return
    }
    if(phoneNo.length < 6){
        if(phoneNo == ''){
            alert("You should enter your phone number.")
        }
        else{
            alert("Your phone number is invalid.")
            return
        }
    }

    // If all validations pass, show success message and redirect
    alert("Payment successfull!");
    window.location.href = "shop.html"; // Redirect to the shop page (adjust the URL as necessary)
};

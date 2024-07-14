// //cart

// let cartIcon = document.querySelector(".cart_icon");
// let cartTab = document.querySelector(".cartTab");
// let cartClose = document.querySelector(".close");

// //open cart
// cartIcon.onclick = () =>{
//     cartTab.classList.add("active");
// };
// //close cart
// cartClose.onclick = () =>{
//     cartTab.classList.remove("active");
// };

// //cart working
// if(document.readyState == "loading"){
//     document.addEventListener("DOMContentLoaded", ready);
// }else{
//     ready();
// }

// //making function

// function ready() {

//     //remove items from cart
//     var removeCartButtons = document.getElementsByClassName("cartItemRemove");
//     console.log(removeCartButtons);
//     for (var i = 0; i<removeCartButtons.length; i++){
//         var button = removeCartButtons[i];
//         button.addEventListener("click", removeCartItem);
//     }
//     //quantity change
//     var quantityInputs = document.getElementsByClassName("cartItemQuantity");
//     for (var i = 0; i < quantityInputs.length; i++){
//         var input = quantityInputs[i];
//         input.addEventListener("change", quantityChanged);
//     }
//     //add to cart
//     var addCart = document.getElementsByClassName("AddToCart_button");
//     for (var i = 0; i < addCart.length; i++){
//         var button = addCart[i];
//         button.addEventListener("click", addCartClicked);
//     }
// }

// //remove items from cart
// function removeCartItem(event){
//     var buttonClicked = event.target;
//     buttonClicked.parentElement.parentElement.remove();
//     updateTotal()
// }

// //quantity change
// function quantityChanged(event){
//     var input = event.target;
//     if (isNaN(input.value) || input.value <= 0){
//         input.value = 1;
//     }
//     updateTotal();
// }

// //add cart
// function addCartClicked(event){
//     var button = event.target;
//     var shopPoducts = button.parentElement;
//     var title = shopPoducts.getElementsByClassName(".product_name")[0].innerText;
//     var price = shopPoducts.getElementsByClassName(".product_price")[0].innerText;
//     var productImage = shopPoducts.getElementsByClassName(".shopItem")[0].src;
//     addProductToCart(title, price, productImage);
//     updateTotal();
// }

// function addProductToCart(title, price, productImage){
//     var cartShopBox = document.createElement("div");
//     cartShopBox.classList.add("cartBox");
//     var cartItems = document.getElementsByClassName("cartContent")[0];
//     var cartItemsNames = cartItems.getElementsByClassName("product_name");
//     var alreadyInCart = false;
//     for (var i = 0; i < cartItemsNames.length; i++){
//         if (cartBoxes[i].dataset.title == title) {
//             alreadyInCart = true;
//             break;
//           }
//         }
// if (!alreadyInCart) {
// var cartBoxContent = `<img src="${productImage}" alt="${title}" class="cartItemImage">
//                             <div class="detailBox">
//                                 <div class="cartItemName">${title}</div>
//                                 <div class="cartItemPrice">$${price}</div>
//                                 <input type="number" value="1" class="cartItemQuantity">
//                             </div>
//                             <svg class="cartItemRemove" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
//                                 <path fill-rule="evenodd" d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z" clip-rule="evenodd"/>
//                               </svg>`;
//     cartShopBox.innerHTML = cartBoxContent;
//     cartShopBox.dataset.title = title;
//     cartItems.append(cartShopBox);
//     cartShopBox
//     .getElementsByClassName("cartItemRemove")[0]
//     .addEventListener("click", removeCartItem);
// cartShopBox
//     .getElementsByClassName("cartItemQuantity")[0]
//     .addEventListener("change", quantityChanged);
// } else{
//     alert("This product is already in your cart");
// }
// }




// //update total
// function updateTotal(){
//     var cartContent = document.getElementsByClassName("cartContent")[0];
//     var cartBoxes = document.getElementsByClassName("cartBox");
//     var total = 0;
//     for (var i = 0; i<cartBoxes.length; i++){
//         var cartBox = cartBoxes[i];
//         var priceElement = cartBox.getElementsByClassName("cartItemPrice")[0];
//         var quantityElemennt = cartBox.getElementsByClassName("cartItemQuantity")[0];
//         var price = parseFloat(priceElement.innerText.replace("$", ""));
//         var quantity = quantityElemennt.value;
//         total = total + (price * quantity);
//         total = Math.round(total * 100) / 100;

//         document.getElementsByClassName("totalPrice")[0].innerText = "$" + total;
//     }
// }


document.addEventListener("DOMContentLoaded", ready);

function ready() {
    // Open cart
    var cartIcon = document.querySelector(".cart_icon");
    var cartTab = document.querySelector(".cartTab");
    var cartClose = document.querySelector(".close");

    cartIcon.onclick = function() {
        cartTab.classList.add("active");
    };

    cartClose.onclick = function() {
        cartTab.classList.remove("active");
    };

    // Remove items from cart
    var removeCartButtons = document.getElementsByClassName("cartItemRemove");
    for (var button of removeCartButtons) {
        button.addEventListener("click", removeCartItem);
    }

    // Quantity change
    var quantityInputs = document.getElementsByClassName("cartItemQuantity");
    for (var input of quantityInputs) {
        input.addEventListener("change", quantityChanged);
    }

    // Add to cart
    var addCartButtons = document.getElementsByClassName("AddToCart_button");
    for (var button of addCartButtons) {
        button.addEventListener("click", addCartClicked);
    }
}

// Remove items from cart
function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.closest(".cartBox").remove();
    updateTotal();
}

// Quantity change
function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateTotal();
}

// Add to cart
function addCartClicked(event) {
    var button = event.target;
    var shopProduct = button.closest(".product_details");
    var title = shopProduct.querySelector(".product_name").innerText;
    var price = shopProduct.querySelector(".product_price").innerText.replace("Price : $", "");
    var productImage = shopProduct.querySelector(".shopItem img").src;
    addProductToCart(title, price, productImage);
    updateTotal();
}

function addProductToCart(title, price, productImage) {
    var cartItems = document.querySelector(".cartContent");
    var cartItemNames = cartItems.getElementsByClassName("cartItemName");

    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText === title) {
            // Increase quantity if item already exists in cart
            var quantityInput = cartItemNames[i].closest(".cartBox").querySelector(".cartItemQuantity");
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
}

// Update total
function updateTotal() {
    var cartContent = document.querySelector(".cartContent");
    var cartBoxes = cartContent.getElementsByClassName("cartBox");
    var total = 0;

    for (var cartBox of cartBoxes) {
        var priceElement = cartBox.querySelector(".cartItemPrice");
        var quantityElement = cartBox.querySelector(".cartItemQuantity");
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = quantityElement.value;
        total += price * quantity;
    }

    total = Math.round(total * 100) / 100;
    document.querySelector(".totalPrice").innerText = "$" + total;
}

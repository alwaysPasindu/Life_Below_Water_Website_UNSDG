//cart

let cartIcon = document.querySelector(".cart_icon");
let cartTab = document.querySelector(".cartTab");
let cartClose = document.querySelector(".close");

cartIcon.onclick = () =>{
    cartTab.classList.add("active");
};

cartClose.onclick = () =>{
    cartTab.classList.remove("active");
};
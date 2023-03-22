let products =
  JSON.parse(localStorage.getItem("basket")) === null
    ? []
    : JSON.parse(localStorage.getItem("basket"));

function recountProductsCounter() {
  let productsCounter = document.querySelector(".products-counter");
  if (productsCounter) {
    products =
      JSON.parse(localStorage.getItem("basket")) === null
        ? []
        : JSON.parse(localStorage.getItem("basket"));
    productsCounter.innerText = products.length;
  }
}
recountProductsCounter();

let burgerBtn = document.querySelector(".header-burger");
let burger = document.querySelector("nav");
let navLinks = burger.querySelectorAll("a");
function toggleBurger() {
  burger.classList.toggle("active-nav");
}
navLinks.forEach((elem) => {
  elem.addEventListener("click", toggleBurger);
});
burgerBtn.addEventListener("click", toggleBurger);

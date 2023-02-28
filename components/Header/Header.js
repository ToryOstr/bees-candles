let products =
  JSON.parse(localStorage.getItem("basket")) === null
    ? []
    : JSON.parse(localStorage.getItem("basket"));

function recountProductsCounter() {
  let productsCounter = document.querySelector(".products-counter");

  products =
    JSON.parse(localStorage.getItem("basket")) === null
      ? []
      : JSON.parse(localStorage.getItem("basket"));
  productsCounter.innerText = products.length;
}
recountProductsCounter();

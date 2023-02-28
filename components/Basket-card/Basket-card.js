let mainBasket =
  JSON.parse(localStorage.getItem("basket")) === null
    ? []
    : JSON.parse(localStorage.getItem("basket"));

let mainBasketCard = document.querySelector(".basket-opened");
let thead = mainBasketCard.querySelector("thead");
let tbody = mainBasketCard.querySelector("tbody");
let tfoot = mainBasketCard.querySelector("tfoot");
let amountValue = 0;
let countingProducts = 0;

function calcOrderAmount() {
  mainBasket.forEach((el) => {
    amountValue += el["sum"];
    countingProducts += el["quantity products"];
  });
}

function generatedBasket(array) {
  calcOrderAmount();
  if (mainBasket.length === 0) {
    thead.innerHTML = `
            <tr class="t-head">
              <th colspan="9">Ви ще не обрали жодного товару</th>
            </tr>`;
    tbody.innerHTML = "";
    tfoot.innerHTML = "";
  } else {
    thead.innerHTML = `
            <tr class="t-head">
              <th scope="col" class="number">№</th>
              <th scope="col" class="product-name">Назва товару</th>
              <th scope="col" class="color">Колір</th>
              <th scope="col" class="saturation">Насиченість</th>
              <th scope="col" class="quantity">Шт</th>
              <th scope="col" class="packaging">Пак</th>
              <th scope="col" class="price">Ціна</th>
              <th scope="col" class="summ">Сума</th>
              <th scope="col" class="remove-product"></th>
            </tr>
            `;
    tbody.innerHTML = mainBasket
      .map((elem, index) => {
        return `
            <tr>
              <td scope="row" class="number">${index + 1}</td>
              <td class="product-name">${elem["product name"]}</td>
              <td class="color">${elem["product color"]}</td>
              <td class="saturation">${elem["color saturation"]}</td>
              <td class="quantity">${elem["quantity products"]}</td>
              <td class="packaging">${elem["packaging"]}</td>
              <td class="price">${elem["product price"]}грн</td>
              <td class="summ">${
                elem["product price"] * elem["quantity products"]
              }грн</td>
              <td>
                <button class="remove-product">
                  <img
                    src="../bees-candles/images/icons/ri_delete-bin-2-line.svg"
                    alt="Видалити товар з корзини"
                  />
                </button>
              </td>
            </tr>
  `;
      })
      .join("");
    tfoot.innerHTML = `
    <tr>
      <th scope="row" colspan="9" class="order-amount">Сума замовлення: ${amountValue}грн</th>
    </tr>
    <tr>
      <th scope="row" colspan="9" class="order-amount">Кількість товару в кошику: ${countingProducts}</th>
    </tr>

    `;
    mainBasketCard.insertAdjacentHTML(
      "beforeend",
      `
      <button class="order-btn">Перейти до оформлення замовлення</button>`
    );
  }
  let removeProductBtns = document.querySelectorAll(".remove-product");
  removeProductBtns.forEach(function (btn) {
    btn.addEventListener("click", removeProduct);
  });
  let orderBtn = document.querySelector(".order-btn");
  orderBtn.addEventListener("click", function () {
    window.open("order-form.html", "_self");
  });
}
generatedBasket(mainBasket);
recountProductsCounter();

function removeProduct() {
  let elementIndex =
    Number(this.closest("tr").querySelector(".number").innerText) - 1;
  mainBasket.splice(elementIndex, 1);
  localStorage.setItem("basket", JSON.stringify(mainBasket));
  mainBasket =
    JSON.parse(localStorage.getItem("basket")) === null
      ? []
      : JSON.parse(localStorage.getItem("basket"));
  amountValue = 0;
  countingProducts = 0;
  recountProductsCounter();
  generatedBasket(mainBasket);
}

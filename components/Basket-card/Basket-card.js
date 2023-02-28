let mainBasket =
  JSON.parse(localStorage.getItem("basket")) === null
    ? []
    : JSON.parse(localStorage.getItem("basket"));

let mainBasketCard = document.querySelector(".basket-opened");
let thead = mainBasketCard.querySelector("thead");
let tbody = mainBasketCard.querySelector("tbody");
let tfoot = mainBasketCard.querySelector("tfoot");

function generatedBasket(array) {
  if (mainBasket.length === 0) {
    thead.innerHTML = `
            <tr class="t-head">
              <th colspan="9">Ви ще не обрали жодного товару</th>
            </tr>`;
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
              <td class="price">${elem["product price"]}</td>
              <td class="summ">${
                elem["product price"] * elem["quantity products"]
              }</td>
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
            <th scope="row" colspan="7">Сума замовлення:</th>
            <td class="quantity"></td>
            <td class="amount-value"></td>
    `;
  }
}
generatedBasket(mainBasket);
recountProductsCounter();

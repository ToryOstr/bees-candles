document.addEventListener("DOMContentLoaded", function () {
  const mainForm = document.forms.new_order;
  const submitBtn = document.querySelector(".submit-btn");

  let userName = mainForm.user_name;
  let userSurname = mainForm.user_surname;
  let deliveryAddress = mainForm.delivery_address;
  let userTel = mainForm.user_tel;
  let errorMessage = document.querySelector(".error-message");

  function userDataValidate(userData) {
    userData = this.value;
    let reg = /^[а-яА-Я]/i;

    if (reg.test(userData)) {
      this.classList.remove("error-border");
      this.classList.add("success-border");
    } else {
      this.classList.remove("success-border");
      this.classList.add("error-border");
    }
  }

  function isTelOk() {
    let tel = userTel.value;
    let reg = /^(\+38)?0((39)|(50)|(63)|(6[6-8])|(73)|(89)|(9[1-9]))[0-9]{5}/i;

    userTel.value = tel.replace(/([^\+0-9])/g, "");

    if (
      (tel.length === 10 && !/\+38/.test(tel)) ||
      (tel.length === 13 && /\+38/.test(tel))
    ) {
      if (reg.test(tel)) {
        userTel.classList.remove("error-border");
        userTel.classList.add("success-border");
      } else {
        errorMessage.innerText = "Перевірте правильність номеру телефону!";
        userTel.classList.remove("success-border");
        userTel.classList.add("error-border");
      }
    } else {
      errorMessage.innerText = "Перевірте правильність номеру телефону!";
      userTel.classList.remove("success-border");
      userTel.classList.add("error-border");
    }
  }

  userName.addEventListener("input", userDataValidate);
  userSurname.addEventListener("input", userDataValidate);

  deliveryAddress.addEventListener("input", function () {
    let address = deliveryAddress.value;
    let reg = /^[а-яА-Я0-9/#/№]/i;

    if (reg.test(address)) {
      this.classList.remove("error-border");
      this.classList.add("success-border");
    } else {
      this.classList.remove("success-border");
      this.classList.add("error-border");
    }
  });

  userTel.addEventListener("change", isTelOk);
  userTel.addEventListener("focus", () => {
    errorMessage.innerText = "";
    userTel.classList.remove("success-border");
    userTel.classList.remove("error-border");
  });

  let orderText = document.querySelector(".order-text");
  let order = JSON.parse(localStorage.getItem("basket"));

  let amountValue = 0;

  function createOrderText() {
    return (
      order
        .map((elem, index) => {
          let packText =
            elem["packaging"] === "Так" ? "з пакуванням" : "без пакування";

          return `
    <span>${index + 1}. ${elem["product name"]} </br> Kолір ${elem[
            "product color"
          ].toLowerCase()} ${elem["color saturation"].toLowerCase()},</br> ${
            elem["quantity products"]
          }шт, ${packText} - ${
            elem["product price"] * elem["quantity products"]
          }грн;</span>`;
        })
        .join("") +
      `
  <span>Сума замовлення: ${amountValue}грн</span>
  `
    );
  }
  function calcOrderAmount() {
    order.forEach((el) => {
      amountValue += el["sum"];
    });
  }
  calcOrderAmount();

  orderText.innerHTML = createOrderText();

  let btns_contactWith = mainForm.contact_whith;

  let btns_deliveryCompany = mainForm.delivery_company;

  function createMessage() {
    let contactWhith = "";
    for (let i = 0; i < btns_contactWith.length; i++) {
      if (btns_contactWith[i].checked) {
        contactWhith = btns_contactWith[i].value;
      } else {
        continue;
      }
    }

    let deliveryCompany = "";
    for (let i = 0; i < btns_deliveryCompany.length; i++) {
      if (btns_deliveryCompany[i].checked) {
        deliveryCompany = btns_deliveryCompany[i].value;
      } else {
        continue;
      }
    }

    return `
    <!DOCTYPE html>
  <html>
  <head>
    <title>Замовлення</title>
  </head>
  <body>
    <table>
      <tr>
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
      ${order
        .map((elem, index) => {
          return `<tr>
              <td scope="row" class="number">${index + 1}</td>
              <td class="product-name">${elem["product name"]}</td>
              <td class="color">${elem["product color"]}</td>
              <td class="saturation">${elem["color saturation"]}</td>
              <td class="quantity">${elem["quantity products"]}</td>
              <td class="packaging">${elem["packaging"]}</td>
              <td class="price">${elem["product price"]}₴</td>
              <td class="summ">${
                elem["product price"] * elem["quantity products"]
              }₴</td>
            </tr>`;
        })
        .join("")}

      <tr>
        <td>Сума замовлення:</td>
        <td>${amountValue}₴</td>
      </tr>
    </table>
  </body>
</html>`;
  }
  let hiddenMessage = document.querySelector(".order-description");
  hiddenMessage.innerText = createMessage();
  console.log(hiddenMessage.value);

  // submitBtn.addEventListener("click", orderSubmit);
});

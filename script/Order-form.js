document.addEventListener("DOMContentLoaded", function () {
  const mainForm = document.forms.order_form;
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

  function calcOrderAmount() {
    order.forEach((el) => {
      amountValue += el["sum"];
    });
  }
  calcOrderAmount();

  orderText.innerHTML =
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
  `;

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
    <b>НОВЕ ЗАМОВЛЕННЯ!</b>

    <strong>Замовник:
    ${userName.value} ${userSurname.value}</strong>
    <strong>Телефон: ${userTel.value}</strong>
    Спосіб зв'язку: ${contactWhith}

    Транспортна компанія: ${deliveryCompany}
    Адреса доставки: ${deliveryAddress.value}
    
    Замовлення: 
    ${order
      .map((elem, index) => {
        let packText =
          elem["packaging"] === "Так" ? "з пакуванням" : "без пакування";
        return `
              <b>${index + 1}. ${elem["product name"]} ${
          elem["product color"]
        } ${elem["color saturation"]} ${packText} ${
          elem["quantity products"]
        }шт,</b>
              <b>ціна за шт: ${elem["product price"]}₴,</b>
              <b>на суму ${
                elem["product price"] * elem["quantity products"]
              }₴</b>

  `;
      })
      .join("")}

    <b>Сума замовлення: ${amountValue}₴</b>
  `;
  }

  const TOKEN = "6096308743:AAEVTXS_lW8ag8H0m-HdU9iQeI2Kw6PeyAg";
  const CHAT_ID = "-1001792925745";
  const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  let finalMessage = document.querySelector(".final-messaage");
  function endOrder() {
    userName.value = "";
    userSurname.value = "";
    deliveryAddress.value = "";
    userTel.value = "";

    localStorage.removeItem("basket");
  }
  function endSession() {
    finalMessage.innerHTML = "";
    finalMessage.classList.remove("active-message");
    setTimeout(window.open("index.html", "_self"), 3000);
  }
  function orderSubmit(e) {
    e.preventDefault();
    axios
      .post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: createMessage,
      })
      .then(() => {
        endOrder();
        finalMessage.innerHTML = `
        <p>Дякуємо за замовлення! З Вами зв'яжуться найближчим часом!</p>`;
        finalMessage.classList.add("active-message");
      })
      .catch((err) => {
        finalMessage.innerHTML = `
        <p>Упс, виникла помилка ${err}. Спробуйте ще раз!</p>`;
        finalMessage.classList.add("active-message");
        // setTimeout((finalMessage.innerHTML = ""), 2000);
      })
      .finally(setTimeout(endSession, 3000));
  }
  // submitBtn.addEventListener("click", orderSubmit);
});

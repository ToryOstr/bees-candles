document.addEventListener("DOMContentLoaded", function () {
  const orderForm = document.querySelector("form");
  orderForm.addEventListener("submit", sendForm);

  async function sendForm(e) {
    e.preventDefault();
  }

  let mainForm = document.forms.order_form;

  let userName = mainForm.user_name;
  let userSurname = mainForm.user_surname;
  let userTel = mainForm.user_tel;

  function getUserData() {
    return console.log(`Замовник:
    ${userName.value} ${userSurname.value}
    tel: ${userTel}`);
  }
  userSurname.addEventListener("change", getUserData);

  function numberVerification() {}
  function formValidate() {
    let error = 0;
    let requiredInputs = document.querySelectorAll("[required]");
    requiredInputs.forEach((elem) => {
      if (elem.classList.contains("user-tel")) {
      }
    });
  }

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



});

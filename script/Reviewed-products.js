const cardBody = document.querySelector(".card-body");
const currentProductId = JSON.parse(localStorage.getItem("id"));

const title = document.querySelector("title");
const currentProduct = CATALOG.find(
  (product) => product.id === currentProductId
);
let currantLang = document.querySelector(".active-lang");
let isUA = currantLang.innerText === "UA";
const generatedCardContent = ({
  img,
  name_ua,
  name_ru,
  height,
  id,
  diameter,
  time,
  mass,
  price,
}) => {
  let massHtml, timeHtml, heightHtml, diameterHtml, cardHtml;
  let name = isUA ? name_ua : name_ru;
  if (isUA) {
    title.innerText = `${[name]}`;
    massHtml =
      mass !== "" && mass !== 0
        ? `
        <div class="elem-about">
          <img
            src="./images/icons/ri_scales-3-fill.svg"
            alt=""
          />
          <span class="mass">${mass}г</span>
        </div>`
        : "";
    timeHtml =
      time !== "" && time !== 0
        ? `
    <div class="elem-about">
      <img src="./images/icons/Vector.svg" alt="" />
      <span class="time">${time}год</span>
    </div>`
        : "";
    heightHtml =
      height !== "" && height !== 0
        ? `
      <div class="elem-about">
          <img
            src="./images/icons/ruler.svg"
            alt=""/>
          <span class="height">${height}см</span>
        </div>`
        : "";
    diameterHtml =
      diameter !== "" && diameter !== 0
        ? `
    <div class="elem-about">
          <img
            src="./images/icons/diameter_icon.svg"
            alt=""/>
          <span class="diameter">${diameter}см</span>
        </div>`
        : "";
    cardHtml = `
    <div class="slider-section">
      <div class="slider-wrapp">
        <div class="slider">
          <img src="${img[0]}" alt="" />
        </div>
      </div>
      <div class="photo-gallery">

      </div>
      <div class="prevention-message">
        <p>*ціна свічки залежить від насиченості кольору</p>
        <p>
          *колір та насиченість виробу можуть відрізнятися від зображених на
          фото.
        </p>
      </div>
    </div>
    <div class="information-and-price">
      <h3 class="product-name">${[name]}</h3>

      <div class="about-product">
        ${massHtml}
        ${timeHtml}
        ${heightHtml}
        ${diameterHtml}
      </div>

      <div class="select">
        <div class="select-header">
          <span class="select-current">Колір</span>
          <div class="select-icon">
            <img
              src="./images/icons/arrow.svg"
              alt="відкрити вибір кольору"/>
          </div>
        </div>
        <div class="color-options">
          
        </div>
      </div>

      <div class="select">
        <div class="select-header">
          <span class="select-current">Насиченість</span>
          <div class="select-icon">
            <img src="./images/icons/arrow.svg" alt="" />
          </div>
        </div>

      </div>

      <div class="checkbox">
        <input
          class="packaging-checkbox"
          type="checkbox"
          name="add_packaging"
          id="add_packaging"
        />
        <label class="packing-label" for="add_packaging">
          Подарункове пакування
        </label>
      </div>

      <div class="price">
        <p>Ціна:</p>
        <span><span class="price-value">${price}</span>₴</span>
      </div>

      <div class="quantity">
        <p>Кількість</p>
        <div class="counter">
          <div class="counter-btn" id="minus">
            <img
              src="./images/icons/minus.svg"
              alt="зменшити кількість"
            />
          </div>
          <span id="counter-value">1</span>
          <div class="counter-btn" id="plus">
            <img
              src="./images/icons/plus.svg"
              alt="збільшити кількість"
            />
          </div>
        </div>
      </div>
      <div class="count-message prevention-message"></div>
      <button id="${id}" class="add-to-cart">
        <span>До кошика</span>
      </button>
    </div>
  `;
  } else {
    title.innerText = `${[name]}`;
    massHtml =
      mass !== "" && mass !== 0
        ? `
        <div class="elem-about">
          <img
            src="../images/icons/ri_scales-3-fill.svg"
            alt=""
          />
          <span class="mass">${mass}г</span>
        </div>`
        : "";
    timeHtml =
      time !== "" && time !== 0
        ? `
    <div class="elem-about">
      <img src="../images/icons/Vector.svg" alt="" />
      <span class="time">${time}ч</span>
    </div>`
        : "";
    heightHtml =
      height !== "" && height !== 0
        ? `
      <div class="elem-about">
          <img
            src="../images/icons/ruler.svg"
            alt=""/>
          <span class="height">${height}см</span>
        </div>`
        : "";
    diameterHtml =
      diameter !== "" && diameter !== 0
        ? `
    <div class="elem-about">
          <img
            src="../images/icons/diameter_icon.svg"
            alt=""/>
          <span class="diameter">${diameter}см</span>
        </div>`
        : "";
    cardHtml = `
    <div class="slider-section">
      <div class="slider-wrapp">
        <div class="slider">
          <img src=".${img[0]}" alt="фото свечи" />
        </div>
      </div>
      <div class="photo-gallery">

      </div>
      <div class="prevention-message">
        <p>*цена зависит от выбранного Вами цвета и насыщенности изделия</p>
        <p>
          *по факту цвет и насыщенность изделия могут немного отличаться от тех, что представленны на фото.
        </p>
      </div>
    </div>
    <div class="information-and-price">
      <h3 class="product-name">${[name]}</h3>

      <div class="about-product">
        ${massHtml}
        ${timeHtml}
        ${heightHtml}
        ${diameterHtml}
      </div>

      <div class="select">
        <div class="select-header">
          <span class="select-current">Цвет</span>
          <div class="select-icon">
            <img
              src="../images/icons/arrow.svg"
              alt="открыть выбор цвета"/>
          </div>
        </div>
        <div class="color-options">
          
        </div>
      </div>

      <div class="select">
        <div class="select-header">
          <span class="select-current">Насыщенность</span>
          <div class="select-icon">
            <img src="../images/icons/arrow.svg" alt="" />
          </div>
        </div>

      </div>

      <div class="checkbox">
        <input
          class="packaging-checkbox"
          type="checkbox"
          name="add_packaging"
          id="add_packaging"
        />
        <label class="packing-label" for="add_packaging">
          Подарочная упаковка
        </label>
      </div>

      <div class="price">
        <p>Цена:</p>
        <span><span class="price-value">${price}</span>₴</span>
      </div>

      <div class="quantity">
        <p>Количество</p>
        <div class="counter">
          <div class="counter-btn" id="minus">
            <img
              src="../images/icons/minus.svg"
              alt="уменьшить количество"
            />
          </div>
          <span id="counter-value">1</span>
          <div class="counter-btn" id="plus">
            <img
              src="../images/icons/plus.svg"
              alt="увеличить количество"
            />
          </div>
        </div>
      </div>
      <div class="count-message prevention-message"></div>
      <button id="${id}" class="add-to-cart">
        <span>В корзину</span>
      </button>
    </div>
  `;
  }

  return cardHtml;
};

cardBody.innerHTML = generatedCardContent(currentProduct);

//Photo gallery
let gallery = document.querySelector(".photo-gallery");
let photosHtml = currentProduct.img
  .map((element) => {
    if (isUA) {
      return `
              <div class="slider-images">
                <img src="${element}" alt="фото свічки"/>
              </div>
            `;
    } else {
      return `
              <div class="slider-images">
                <img src=".${element}" alt="фото свечи"/>
              </div>
            `;
    }
  })
  .join("");
gallery.innerHTML = photosHtml;

//Slider
const slider = document.querySelector(".slider");
const sliderImgs = document.querySelectorAll(".slider-images");

function toggleSliderImg(e) {
  let img = e.currentTarget.innerHTML;
  return (slider.innerHTML = img);
}

sliderImgs.forEach((elem) => {
  elem.addEventListener("click", toggleSliderImg);
});

//Custom HTML select
let selectHeaders = document.querySelectorAll(".select-header");
let selectColorOptions = document.querySelector(".color-options");

selectColorOptions.innerHTML = currentProduct.color
  .map((elem) => {
    let name = isUA ? "name_ua" : "name_ru";
    return `
          <div class="option">
            <span class="color-name">${elem[name]}</span>
            <span class="color-item"
              style="background-color: ${elem.color}"></span>
          </div>`;
  })
  .join("");

let options = document.querySelectorAll(".option");

function selectClassToogle(e) {
  this.parentElement.classList.toggle("select-is-active");
}

let currentProductColor = "";

function selectOption() {
  let selectedOption = this.innerHTML;
  currentProductColor = this.firstElementChild.innerText;
  let currentSelect = this.closest(".select");
  currentSelect.querySelector(".select-header").innerHTML = `${selectedOption}`;
  currentSelect.classList.remove("select-is-active");

  generatedSelectSaturation();
  calcPrice();
}

function generatedSelectSaturation() {
  if (
    !document
      .querySelectorAll(".select")[1]
      .innerHTML.includes(`<div class="saturation-options">`)
  ) {
    document
      .querySelectorAll(".select")[1]
      .insertAdjacentHTML(
        "beforeend",
        `<div class="saturation-options"></div>`
      );
  }

  let selectSaturationOptions = document.querySelector(".saturation-options");
  currentProduct.color.map(function (elem) {
    let name = isUA ? "name_ua" : "name_ru";
    if (elem[name] === currentProductColor) {
      selectSaturationOptions.innerHTML = elem.saturation
        .map((elem) => {
          return `
      <div class="option">
        <span class="saturation-name">${elem[name]}</span>
        <span class="saturation-price">+<span class="saturation-value">${elem.price}</span>грн</span>
      </div>
      `;
        })
        .join("");
    }
  });
  let saturationOptions = selectSaturationOptions.querySelectorAll(".option");

  saturationOptions.forEach(function (element) {
    element.addEventListener("click", selectSaturation);
  });
}

selectHeaders.forEach((element) => {
  element.addEventListener("click", selectClassToogle);
});

selectHeaders[0].addEventListener("click", function () {
  selectHeaders[1].parentElement.classList.remove("select-is-active");
  selectHeaders[1].innerHTML = isUA
    ? `
          <span class="select-current">Насиченість</span>
          <div class="select-icon">
            <img src="./images/icons/arrow.svg" alt="">
          </div>
          `
    : `
          <span class="select-current">Насыщенность</span>
          <div class="select-icon">
            <img src="../images/icons/arrow.svg" alt="">
          </div>
          `;
});
selectHeaders[1].addEventListener("click", selectClassToogle);

options.forEach(function (element) {
  element.addEventListener("click", selectOption);
});

options.forEach(function (element) {
  element.addEventListener("click", calcPrice);
});

function selectSaturation() {
  let selectedOption = this.innerHTML;
  let currentSelect = this.closest(".select");
  currentSelect.querySelector(".select-header").innerHTML = `${selectedOption}`;
  currentSelect.classList.remove("select-is-active");

  calcPrice();
}

//Calculator

let packaging = document.querySelector(".packaging-checkbox");
let priceOutput = document.querySelector(".price-value");

function calcPrice() {
  let saturationValue = selectHeaders[1].querySelector(".saturation-value");

  if (
    currentProductColor === ("Натуральний віск" || "Натуральный воск") &&
    saturationValue === null
  ) {
    saturationValue = 0;
  } else if (
    currentProductColor === ("Інший колір" || "Другой цвет") &&
    saturationValue === null
  ) {
    saturationValue = 20;
  } else {
    saturationValue = saturationValue ? Number(saturationValue.innerText) : 0;
  }

  let productPrice = currentProduct.price;

  if (packaging.checked) {
    productPrice += 10 + saturationValue;
  } else {
    productPrice = currentProduct.price + saturationValue;
  }

  priceOutput.innerText = productPrice;
}

packaging.addEventListener("click", calcPrice);

//Quantity products

let counterMinus = document.querySelector("#minus");
let counterPlus = document.querySelector("#plus");
let counterValue = document.querySelector("#counter-value");
let count = Number(counterValue.innerText);
let countMessage = document.querySelector(".count-message");
counterMinus.addEventListener("click", (e) => {
  if (count > 1) {
    count--;
    countMessage.innerText = "";
  } else {
    count = 1;
    countMessage.innerText = isUA
      ? `${count} - це мінімальна кількість замовлення.`
      : `${count} - это минимальное количество.`;
  }

  counterValue.innerText = count;
});
counterPlus.addEventListener("click", (e) => {
  if (count < 10) {
    count++;
    countMessage.innerText = "";
  } else {
    count = 10;
    countMessage.innerText = isUA
      ? `${count} - це максимальна кількість замовлення.`
      : `${count} - это максимальное количество.`;
  }
  counterValue.innerText = count;
});

let basket =
  JSON.parse(localStorage.getItem("basket")) === null
    ? []
    : JSON.parse(localStorage.getItem("basket"));

const btn = document.querySelector(".add-to-cart");

function blockedBtn() {
  btn.innerText = isUA
    ? "Оберіть колір та насиченість"
    : "Выберите цвет и насыщенность";
  setTimeout(() => {
    btn.innerText = isUA ? "До кошика" : "В корзину";
  }, 2000);
  btn.classList.add("blocked-btn");
  setTimeout(() => {
    btn.classList.remove("blocked-btn");
  }, 2000);
}
let selectedProduct;

function generatedSelectedProduct() {
  selectedProduct = {
    "product name": document.querySelector(".product-name").innerText,
    "product color":
      currentProduct.color[name] !== "Вибір не можливий" ||
      currentProduct.color[name] !== "Выбор не возможен"
        ? currentProductColor
        : "Вибір не можливий",
    "color saturation":
      currentProductColor === "Натуральний віск" ||
      currentProductColor === "Натуральный воск" ||
      currentProductColor === "Інший колір" ||
      currentProductColor === "Другой цвет" ||
      selectHeaders[1].querySelector(".saturation-name") === null
        ? ""
        : selectHeaders[1].querySelector(".saturation-name").innerText,
    packaging: packaging.checked ? "Так" : "Ні",
    "product price": priceOutput.innerText,
    "quantity products": count,
    sum: Number(priceOutput.innerText) * count,
  };
}
function setProductsToLocalStorage() {
  basket.push(selectedProduct);
  localStorage.setItem("basket", JSON.stringify(basket));
}

function addToBascket() {
  generatedSelectedProduct();
  if (
    document
      .querySelector(".color-options")
      .querySelector(".option")
      .querySelector(".color-name").innerText === "Вибір не можливий" ||
    document
      .querySelector(".color-options")
      .querySelector(".option")
      .querySelector(".color-name").innerText === "Выбор не возможен"
  ) {
    setProductsToLocalStorage();
    generatedModalMessage(selectedProduct);
    toggleActiveClass();
    setTimeout(toggleActiveClass, 3000);
  } else {
    if (
      (currentProductColor !== "Натуральний віск" ||
        currentProductColor !== "Натуральный воск") &&
      (currentProductColor !== "Інший колір" ||
        currentProductColor !== "Другой цвет") &&
      selectHeaders[1].querySelector(".saturation-name") === null
    ) {
      blockedBtn();
    } else {
      setProductsToLocalStorage();
      generatedModalMessage(selectedProduct);
      toggleActiveClass();
      setTimeout(toggleActiveClass, 3000);
    }
  }
  recountProductsCounter();
}
let messageModal = document.querySelector(".modal-message");

function toggleActiveClass() {
  messageModal.classList.toggle("active-message");
}
function generatedModalMessage(elem) {
  messageModal.innerHTML = isUA
    ? `
    <div class="success-message">
    <p>Додано до кошика:</p>
      <p>${elem["product name"]},</p>
      <p>колір ${elem["product color"].toLowerCase()}, ${elem[
        "color saturation"
      ].toLowerCase()}</p>
      <p>в кількості ${elem["quantity products"]}шт</p>
    </div> `
    : `<div class="success-message">
    <p>Добавлено в корзину:</p>
      <p>${elem["product name"]},</p>
      <p>колір ${elem["product color"].toLowerCase()}, ${elem[
        "color saturation"
      ].toLowerCase()}</p>
      <p>в количестве ${elem["quantity products"]}шт</p>
    </div> `;
}

btn.addEventListener("click", addToBascket);

let basketBtn = document.querySelector(".basket-btn");

function openBasket() {
  window.open("basket.html", "_self");
}

basketBtn.addEventListener("click", openBasket);

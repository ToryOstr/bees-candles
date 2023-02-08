const cardBody = document.querySelector(".card-body");
const currentProductId = [JSON.parse(localStorage.getItem("id"))];

const title = document.querySelector("title");
const currentProduct = CATALOG.find(
  (product) => product.id === currentProductId[currentProductId.length - 1]
);

const generatedCardContent = ({
  img,
  name,
  height,
  id,
  diameter,
  time,
  mass,
  price,
}) => {
  title.innerText = `${name}`;

  let cardHtml = `
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
      <h3 class="product-name">${name}</h3>
      <span class="product-id visually-hidden"></span>
      <div class="about-product">
        <div class="elem-about">
          <img
            src="../bees-candles/images/icons/ri_scales-3-fill.svg"
            alt=""
          />
          <span class="mass">${mass}г</span>
        </div>
        <div class="elem-about">
          <img src="../bees-candles/images/icons/Vector.svg" alt="" />
          <span class="time">${time}год</span>
        </div>
        <div class="elem-about">
          <img src="../bees-candles/images/icons/ruler.svg" alt="" />
          <span class="height">${height}см</span>
        </div>
        <div class="elem-about">
          <img
            src="../bees-candles/images/icons/diameter_icon.svg"
            alt=""/>
          <span class="diameter">${diameter}см</span>
        </div>
      </div>

      <div class="select">
        <div class="select-header">
          <span class="select-current">Колір</span>
          <div class="select-icon">
            <img
              src="../bees-candles/images/icons/arrow.svg"
              alt="відкрити вибір кольору"/>
          </div>
        </div>
        <div class="color-options">
          <div class="option">
            <span class="color-name">Натуральний віск</span>
            <span
              class="color-item"
              style="background-color: rgb(241, 162, 19)"></span>
          </div>

          <div class="option">
            <span class="color-name">Айворі</span>
            <span
              class="color-item"
              style="background-color: rgb(255, 242, 204)"></span>
          </div>

          <div class="option">
            <span class="color-name">Червоний</span>
            <span
              class="color-item"
              style="background-color: rgb(120, 7, 0)"></span>
          </div>

          <div class="option">
            <span class="color-name">Темний шоколад</span>
            <span
              class="color-item"
              style="background-color: rgb(40, 15, 3)"></span>
          </div>

          <div class="option">
            <span class="color-name">Зелений</span>
            <span
              class="color-item"
              style="background-color: rgb(58, 81, 9)"
            ></span>
          </div>

          <div class="option">
            <span class="color-name">Хочу інший колір</span>
            <span
              class="color-item"
              style="background-color: rgb(255, 255, 255)"
            ></span>
          </div>
        </div>
      </div>

      <div class="select">
        <div class="select-header">
          <span class="select-current">Насиченість</span>
          <div class="select-icon">
            <img src="../bees-candles/images/icons/arrow.svg" alt="" />
          </div>
        </div>
        <div class="saturation-options">
          <div class="option">
            <span class="saturation-name">Пастельний</span>
            <span
              class="saturation-item"
              style="background-color: rgb(224 242 125)"
            ></span>
          </div>

          <div class="option">
            <span class="saturation-name">Середньої яскравості</span>
            <span
              class="saturation-item"
              style="background-color: rgb(133, 160, 26)"
            ></span>
          </div>
          <div class="option">
            <span class="saturation-name">Насичений</span>
            <span
              class="saturation-item"
              style="background-color: rgb(68, 85, 2)"
            ></span>
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
        <span class="price-value">${price}₴</span>
      </div>

      <div class="quantity">
        <p>Кількість</p>
        <div class="counter">
          <div class="counter-btn" id="minus">
            <img
              src="../bees-candles/images/icons/minus.svg"
              alt="зменшити кількість"
            />
          </div>
          <span id="counter_value">1</span>
          <div class="counter-btn" id="plus">
            <img
              src="../bees-candles/images/icons/plus.svg"
              alt="збільшити кількість"
            />
          </div>
        </div>
      </div>
      <button id="${id}" class="add-to-cart">
        <span>До кошика</span>
      </button>
    </div>
  `;
  return cardHtml;
};
cardBody.innerHTML = generatedCardContent(currentProduct);

//Photo gallery
let gallery = document.querySelector(".photo-gallery");
let photosHtml = currentProduct.img
  .map((element) => {
    return `
              <div class="slider-images">
                <img src="${element}" alt="фото свічки"/>
              </div>
            `;
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

//Custom HTML selest
let selectHeaders = document.querySelectorAll(".select-header");
let selectOptions = document.querySelectorAll(".option");

function selectClassToogle(e) {
  this.parentElement.classList.toggle("select-is-active");
}

function selectOption() {
  let selectedOption = this.innerHTML;
  let currentOption = this.closest(".select");
  currentOption.querySelector(".select-header").innerHTML = `${selectedOption}`;
  currentOption.classList.remove("select-is-active");
}

selectHeaders.forEach((element) => {
  element.addEventListener("click", selectClassToogle);
});

selectOptions.forEach((element) => {
  element.addEventListener("click", selectOption);
});

//Button
const btn = document.querySelector(".add-to-cart");
btn.addEventListener("click", (e) => {});

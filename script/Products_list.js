const generateProductCard = (img, name_ua, name_ru, id, time, mass, price) => {
  let currantLang = document.querySelector(".active-lang");
  if (currantLang.innerText === "UA") {
    return `
  <li id="${id}" class="product-preview">
    <div class="product-photo">
      <img
        src="${img[0]}"
        alt="фото свічки"
      />
    </div>
    <h3 class="name">${name_ua}</h3>
    <div class="about-product">
      <div class="elem-about">
        <img
          src="./images/icons/ri_scales-3-fill.svg"
          alt=""
        />
        <span class="mass">${mass}г</span>
      </div>
      <div class="elem-about">
        <img src="./images/icons/Vector.svg" alt="" />
        <span class="time">${time}год</span>
      </div>
      <div class="elem-about">
        <img
          src="./images/icons/entypo_price-tag.svg"
          alt=""
        />
        <span class="price">${price}грн</span>
      </div>
    </div>
      <button class="more-about">Детальніше</button>
  </li>
  `;
  } else {
    return `
  <li id="${id}" class="product-preview">
    <div class="product-photo">
      <img
        src=".${img[0]}"
        alt="фото свечи"
      />
    </div>
    <h3 class="name">${name_ru}</h3>
    <div class="about-product">
      <div class="elem-about">
        <img
          src="../images/icons/ri_scales-3-fill.svg"
          alt=""
        />
        <span class="mass">${mass}г</span>
      </div>
      <div class="elem-about">
        <img src="../images/icons/Vector.svg" alt="" />
        <span class="time">${time}ч</span>
      </div>
      <div class="elem-about">
        <img
          src="../images/icons/entypo_price-tag.svg"
          alt=""
        />
        <span class="price">${price}грн</span>
      </div>
    </div>
      <button class="more-about">Подробнее</button>
  </li>
  `;
  }
};
const catalogHtml = CATALOG.map((candel) => {
  return generateProductCard(
    candel.img,
    candel.name_ua,
    candel.name_ru,
    candel.id,
    candel.time,
    candel.mass,
    candel.price
  );
}).join("");

ROOT_CATALOG.innerHTML = catalogHtml;

const viewBtns = document.querySelectorAll(".product-preview");

function openCard(e) {
  localStorage.setItem("id", JSON.stringify(e.currentTarget.id));
  window.open("product-view.html", "_self");
}

viewBtns.forEach((button) => {
  button.addEventListener("click", openCard);
});

document.querySelector(".basket-btn").addEventListener("click", function () {
  window.open("basket.html", "_self");
});
recountProductsCounter();

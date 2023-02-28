const generateProductCard = (img, name, id, time, mass, price) => {
  return `
  <li id="${id}" class="product-preview">
    <div class="product-photo">
      <img
        src="${img[0]}"
        alt="фото свічки"
      />
    </div>
    <h3 class="name">${name}</h3>
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
        <img
          src="../bees-candles/images/icons/entypo_price-tag.svg"
          alt=""
        />
        <span class="price">${price}грн</span>
      </div>
    </div>
      <button class="more-about">Детальніше</button>
  </li>
  `;
};
const catalogHtml = CATALOG.map((candel) => {
  return generateProductCard(
    candel.img,
    candel.name,
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
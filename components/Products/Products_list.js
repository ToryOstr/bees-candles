/* class Products_list {
  render() {
    let htmlCatalog = "";

    CATALOG.forEach(({ img, name, id, time, mass, price }) => {
      htmlCatalog += `
        <li class="product-preview">
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
                  <span class="price">${price}см</span>
                </div>
              </div>
                <a class="more-about" id="${id}" href="./product-view.html">Детальніше</a>
            </li>`;
    });

    ROOT_CATALOG.innerHTML = `${htmlCatalog}`;
  }
}

const productsPage = new Products_list();
productsPage.render();
*/

const generateProductCard = (img, name, id, time, mass, price) => {
  return `
  <li class="product-preview">
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
        <span class="price">${price}см</span>
      </div>
    </div>
      <a class="more-about" id="${id}" href="./product-view.html">Детальніше</a>
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

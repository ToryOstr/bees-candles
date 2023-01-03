class Products {
  render() {
    let htmlCatalog = "";

    CATALOG.forEach(({ img, name, time, weight, price }) => {
      console.log(img, name, time, weight, price);
      htmlCatalog += `
      <li class="product-card">
            <div class="product-img">
              <img src="${img}" alt="">
            </div>
            <p class="name">${name}</p>
            <div class="about">
              <div class="inform-element">
                <img src="../bees-candles/images/icons/Vector.svg" alt="">
                <span>${time}год</span>
              </div>
              <div class="inform-element">
                <img src="../bees-candles/images/icons/ri_scales-3-fill.svg" alt="">
                <span>${weight}г</span>
              </div>
              <div class="inform-element">
                <img src="../bees-candles/images/icons/entypo_price-tag.svg" alt="">
                <span>Від ${price}₴</span>
              </div>
            </div>
            <button class="more-about" type="button">Детальніше</button>
          </li>
      `;
    });

    ROOT_CATALOG.innerHTML = `${htmlCatalog}`;
  }
}

const productsPage = new Products();
productsPage.render();

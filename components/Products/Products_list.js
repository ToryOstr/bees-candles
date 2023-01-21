class Products_list {
  render() {
    let htmlCatalog = "";

    CATALOG.forEach(
      ({ img, name, id, time, mass, height, diameter, price }) => {
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
              <div class="more-about">
                <span>Детальніше</span>
              </div>
            </li>`;
        /*   htmlCatalog += `
      <li class="card-body">
        <div class="slider-section">
          <div class="slider-wrapp">
            <div class="slider">
              <img src="${img[0]}" alt="фото">
            </div>
          </div>
          <div class="photo-gallery">
            <div class="slider-images">
              <img src="${img[0]}" alt="фото">
            </div>
            <div class="slider-images">
              <img src="${img[1]}" alt="фото">
            </div>
            <div class="slider-images">
              <img src="${img[2]}" alt="фото">
            </div>

          </div>
          <div class="prevention-message">
            <p>*ціна свічки залежить від насиченості кольору</p>
            <p>*колір та насиченість виробу можуть відрізнятися від зображених на фото.</p>
          </div>
        </div>
      <div class="information-and-price modificator">
        <h3 class="name">${name}</h3>
        <span class="product-id visually-hidden">${id}</span>
        <div class="about-product">
          <div class="elem-about">
            <img src="../bees-candles/images/icons/ri_scales-3-fill.svg" alt="">
            <span class="mass">${mass}г</span>
          </div>
          <div class="elem-about">
            <img src="../bees-candles/images/icons/Vector.svg" alt="">
            <span class="time">${time}год</span>
          </div>
          <div class="elem-about">
            <img src="../bees-candles/images/icons/ruler.svg" alt="">
            <span class="height">${height}см</span>
          </div>
          <div class="elem-about">
            <img src="../bees-candles/images/icons/diameter_icon.svg" alt="">
            <span class="diameter">${diameter}см</span>
          </div>
        </div>
        <div class="select-color">
          <div class="select-header">
            <span class="select-current">Колір</span>
            <div class="select-icon">
              <img src="../bees-candles/images/icons/arrow.svg" alt="відкрити вибір кольору">
            </div>
          </div>
          <div class="color-options">
            <div class="option">
              <span class="color-name">Натуральний віск</span>
              <span class="color-item" style="background-color: rgb(241, 162, 19);"></span>
            </div>

            <div class="option">
              <span class="color-name">Айворі</span>
              <span class="color-item" style="background-color: rgb(255, 242, 204);"></span>
            </div>

            <div class="option">
              <span class="color-name">Червоний</span>
              <span class="color-item" style="background-color: rgb(120, 7, 0);"></span>
            </div>

            <div class="option">
              <span class="color-name">Темний шоколад</span>
              <span class="color-item" style="background-color: rgb(40, 15, 3);"></span>
            </div>

            <div class="option">
              <span class="color-name">Зелений</span>
              <span class="color-item" style="background-color: rgb(58, 81, 9);"></span>
            </div>

            <div class="option">
              <span class="color-name">Хочу інший колір</span>
              <span class="color-item" style="background-color: rgb(255, 255, 255);"></span>
            </div>
          </div>

        </div>

        <div class="select-saturation">
          <div class="select-header">
            <span class="select-current">Насиченість</span>
            <div class="select-icon">
              <img src="../bees-candles/images/icons/arrow.svg" alt="">
            </div>
          </div>
          <div class="saturation-options">
            <div class="option">
              <span class="saturation-name">Пастельний</span>
              <span class="saturation-item" style="background-color: rgb(224 242 125);"></span>
            </div>

            <div class="option">
              <span class="saturation-name">Середньої яскравості</span>
              <span class="saturation-item" style="background-color: rgb(133, 160, 26);"></span>
            </div>
            <div class="option">
              <span class="saturation-name">Насичений</span>
              <span class="saturation-item" style="background-color: rgb(68, 85, 2);"></span>
            </div>
          </div>

        </div>

        <div class="checkbox">
          <input class="packaging-checkbox" type="checkbox" name="add_packaging" id="add_packaging">
          <label class="packing-label" for="add_packaging">
            Подарункове пакування
          </label>
        </div>

        <div class="price">
          <p>Ціна:</p>
          <span class="price-value">Від ${price}₴</span>
        </div>

        <div class="quantity">
          <p>Кількість</p>
          <div class="counter">
            <div class="counter-btn" id="minus">
              <img src="../bees-candles/images/icons/minus.svg" alt="зменшити кількість">
            </div>
            <span id="counter_value">1</span>
            <div class="counter-btn" id="plus">
              <img src="../bees-candles/images/icons/plus.svg" alt="збільшити кількість">
            </div>
          </div>
        </div>
        <div class="add-to-cart">До кошика</div>
      </div>
    </li>
      `;*/
      }
    );

    ROOT_CATALOG.innerHTML = `${htmlCatalog}`;
  }
}

const productsPage = new Products_list();
productsPage.render();



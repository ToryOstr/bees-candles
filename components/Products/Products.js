class Products {
  render() {
    let htmlCatalog = "";

    CATALOG.forEach(({ id, img, name, price }) => {
      htmlCatalog += `
      <li>
        
      </li>
      `;
    });
  }
}

const productsPage = new Products();
productsPage.render();

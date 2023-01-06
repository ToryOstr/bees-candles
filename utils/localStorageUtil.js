class LocalStorageUtil {
  constructor() {
    this.keyName = "products";
  }

  getProducts() {
    const productsLocalStorage = localStorage.getItem(this.keyName);
    if (productsLocalStorage !== null) {
      return JSON.parse(productsLocalStorage);
    }
    return [];
  }

  putProducts(id) {
    let products = this.getProducts();
    const index = products.indexOf(id);
    let isPush = false;

    if (index === -1) {
      products.push(id);
      isPush = true;
    } else {
      products.splice(index, 1);
    }

    localStorage.setItem(this.keyName, JSON.stringify(products));

    return { isPush, products };
  }
}

const localStorageUtil = new LocalStorageUtil();

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

    localStorage.setItem(this.keyName, JSON.stringify(products));

    return { products };
  }
}

const localStorageUtil = new LocalStorageUtil();

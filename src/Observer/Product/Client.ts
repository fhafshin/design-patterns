import Product from "./Product";
import ProductPriceObserver from "./ProductPriceObserver";

export default class Client {
  public updatePrice() {
    const product = new Product(100000);
    product.attach("price", new ProductPriceObserver());
    product.changePrice(5);
  }
}

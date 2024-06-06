import Product from "./Product";

export default class StockService {
  public exist(product: Product) {
    console.log(`checking stock for ${product.title()}`);

    return true;
  }
}

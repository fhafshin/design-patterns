import CashInterface from "./CashInterface";
import Product from "./Product";
import ProductRepositoryInterface from "./ProductRepositoryInterface";

export default class CashedProductRepository
  implements ProductRepositoryInterface
{
  constructor(
    private _productRepository: ProductRepositoryInterface,
    private _cash: CashInterface
  ) {}
  all(): Promise<Product[]> {
    const products = this._cash.get("products");

    if (products) {
      return Promise.resolve(products);
    }

    return this._productRepository.all().then((products) => {
      this._cash.set("products", products);
      return products;
    });
  }
}

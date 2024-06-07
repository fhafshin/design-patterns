import Product from "./Product";
import ProductRepositoryInterface from "./ProductRepositoryInterface";

export default class MySQLProductRepository
  implements ProductRepositoryInterface
{
  all(): Promise<Product[]> {
    throw new Error("method not implemented");
  }
}

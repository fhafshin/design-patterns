import Product from "./Product";

export default interface ProductRepositoryInterface {
  all(): Promise<Product>;
}

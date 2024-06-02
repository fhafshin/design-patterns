import BasketItem from "./BasketItem";

export default class ProductPackage implements BasketItem {
  constructor(private items: BasketItem[]) {}
  price(): number {
    return this.items.reduce((sum, item) => (sum += item.price()), 0);
  }
}

import BasketItem from "./BasketItem";

export default class Basket {
  add(item: BasketItem) {
    this.items.push(item);
  }
  constructor(private items: BasketItem[] = []) {}

  public total() {
    return this.items.reduce((sum, item) => sum + item.price(), 0);
  }
}

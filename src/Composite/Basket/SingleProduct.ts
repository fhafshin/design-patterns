import BasketItem from "./BasketItem";

export default class SingleProduct implements BasketItem {
  constructor(private _price: number) {}
  price(): number {
    return this._price;
  }
}

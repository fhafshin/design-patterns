import DiscountFactory from "./DiscountFactory";

export default class client {
  constructor(private _discountFactory: DiscountFactory) {}

  public generateDiscount() {
    const date = new Date();
    for (let index = 0; index < 10000; index++) {
      const discount = this._discountFactory.createDiscount(
        `discount-${index}`,
        index,
        50,
        10000,
        50000,
        2,
        date
      );
    }
  }
}

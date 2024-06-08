import DiscountConstraints from "./DiscountConstraints";

export default class Discount {
  constructor(
    private _code: string,
    private _user: number,
    private _discountConstraints: DiscountConstraints
  ) {}
}

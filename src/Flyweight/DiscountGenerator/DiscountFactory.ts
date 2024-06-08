import Discount from "./Discount";
import DiscountConstraints from "./DiscountConstraints";

import crypto from "crypto";

export default class DiscountFactory {
  private _constraints: Map<string, DiscountConstraints> = new Map();

  public createDiscount(
    _code: string,
    _user: number,
    _percent: number,
    _minAmount: number,
    _maxAmount: number,
    _limit: number,
    _expireDate: Date
  ) {
    const discountConstraints: DiscountConstraints =
      this.createDiscountConstraints(
        _percent,
        _minAmount,
        _maxAmount,
        _limit,
        _expireDate
      );

    return new Discount(_code, _user, discountConstraints);
  }

  private createDiscountConstraints(
    _percent: number,
    _minAmount: number,
    _maxAmount: number,
    _limit: number,
    _expireDate: Date
  ): DiscountConstraints {
    const key: string = this.createKey(
      _percent,
      _minAmount,
      _maxAmount,
      _limit,
      _expireDate
    );

    if (!this._constraints.has(key)) {
      this._constraints.set(
        key,
        new DiscountConstraints(
          _percent,
          _minAmount,
          _maxAmount,
          _limit,
          _expireDate
        )
      );
    }

    return this._constraints.get(key) as DiscountConstraints;
  }

  createKey(
    _percent: number,
    _minAmount: number,
    _maxAmount: number,
    _limit: number,
    _expireDate: Date
  ): string {
    return crypto
      .createHash("md5")
      .update(
        `${_percent} - ${_minAmount} - ${_maxAmount} ${_limit} ${_expireDate}`
      )
      .digest("hex");
  }
}

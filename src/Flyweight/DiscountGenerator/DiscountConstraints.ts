export default class DiscountConstraints {
  constructor(
    private _percent: number,
    private _minAmount: number,
    private _maxAmount: number,
    private _limit: number,
    private _expireDate: Date
  ) {}
}

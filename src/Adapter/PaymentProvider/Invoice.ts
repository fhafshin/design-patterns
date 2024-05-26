export default class Invoice {
  private _amount: number;

  constructor(amount: number) {
    if (amount < 0) {
      throw new Error("amount connot be negative");
    }
    this._amount = amount;
  }

  public amount(): number {
    return this._amount;
  }
}

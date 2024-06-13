export default class Customer {
  private _credit!: number;
  public increaseCredit(amount: number): void {
    this._credit += amount;
  }

  public decreaseCredit(amount: number): void {
    this._credit -= amount;
  }

  public credit() {
    return this._credit;
  }
}

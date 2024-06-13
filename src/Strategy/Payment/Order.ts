import Customer from "./Customer";

export default class Order {
  constructor(private _price: number, private _customer: Customer) {}

  public price(): number {
    return this._price;
  }

  public customer() {
    return this._customer;
  }
}

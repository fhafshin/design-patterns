import InvoicePrice from "./InvoicePrice";

export default class Invoice implements InvoicePrice {
  constructor(private _price: number) {}
  public price() {
    return this._price;
  }
}

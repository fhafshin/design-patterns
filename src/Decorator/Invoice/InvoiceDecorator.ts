import InvoicePrice from "./InvoicePrice";

export default class InvoiceDecorator implements InvoicePrice {
  constructor(protected _invoice: InvoicePrice) {}
  price(): number {
    return this._invoice.price();
  }
}

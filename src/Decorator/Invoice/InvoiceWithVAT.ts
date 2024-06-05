import InvoiceDecorator from "./InvoiceDecorator";

export default class InvoiceWithVAT extends InvoiceDecorator {
  price(): number {
    return this._invoice.price() * (0.09 * this._invoice.price());
  }
}

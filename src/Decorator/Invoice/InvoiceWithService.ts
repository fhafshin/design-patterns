import InvoiceDecorator from "./InvoiceDecorator";

export default class InvoiceWithService extends InvoiceDecorator {
  price(): number {
    return this._invoice.price() + 15000;
  }
}

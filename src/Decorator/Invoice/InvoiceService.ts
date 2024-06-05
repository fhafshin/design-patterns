import InvoicePrice from "./InvoicePrice";
import InvoiceWithVAT from "./InvoiceWithVAT";

export default class InvoiceWithService {
  constructor(private invoice: InvoicePrice) {}

  public show() {
    const vat = new InvoiceWithVAT(this.invoice);
    const service = new InvoiceWithService(vat);
    return service.invoice.price();
  }
}

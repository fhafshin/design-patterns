import Invoice from "../../Invoice";
import PaymentMethod from "../PaymentMethod";

export default class ChequeMethod extends PaymentMethod {
  public startPay(invoice: Invoice): void {
    //insert in to table cheque
    this.paymentHandler.pay(invoice);
  }
}

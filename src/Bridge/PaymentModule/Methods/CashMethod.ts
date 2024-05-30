import Invoice from "../../Invoice";
import PaymentMethod from "../PaymentMethod";

export default class CashMethod extends PaymentMethod {
  public startPay(invoice: Invoice): void {
    this.paymentHandler.pay(invoice);
  }
}

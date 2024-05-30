import Invoice from "../../Invoice";
import PaymentMethod from "../PaymentMethod";

export default class OnlinePayment extends PaymentMethod {
  public startPay(invoice: Invoice): void {
    //insert into table online payment
    this.paymentHandler.pay(invoice);
  }
}

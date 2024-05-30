import Invoice from "../Invoice";
import PaymentHandler from "./PaymentHandler";

export default abstract class PaymentMethod {
  constructor(public paymentHandler: PaymentHandler) {}
  public abstract startPay(invoice: Invoice): void;
}

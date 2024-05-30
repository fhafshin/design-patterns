import Invoice from "../../Invoice";
import paymentHandler from "../PaymentHandler";

export default class CardToCardHandler implements paymentHandler {
  pay(invoice: Invoice): void {}
}

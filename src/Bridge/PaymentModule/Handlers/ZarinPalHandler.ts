import Invoice from "../../Invoice";
import PaymentHandler from "../PaymentHandler";

export default class ZarinPalHandler implements PaymentHandler {
  pay(invoice: Invoice): void {}
}

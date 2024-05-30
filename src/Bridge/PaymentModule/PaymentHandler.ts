import Invoice from "../Invoice";

export default interface paymentHandler {
  pay(invoice: Invoice): void;
}

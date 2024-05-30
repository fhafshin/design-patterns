import Invoice from "../../Invoice";
import paymentHandler from "../PaymentHandler";

export default class SayyadCheque implements paymentHandler {
  pay(invoice: Invoice): void {
    throw new Error("Method not implemented.");
  }
}

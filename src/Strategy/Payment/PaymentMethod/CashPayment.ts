import Order from "../Order";
import PaymentMethod from "../PaymentMethod";

export default class CashPayment implements PaymentMethod {
  pay(order: Order): void {
    throw new Error("Method not implemented.");
  }
}

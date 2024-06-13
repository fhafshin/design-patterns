import Order from "../Order";
import PaymentMethod from "../PaymentMethod";

export default class CardToCardPayment implements PaymentMethod {
  pay(order: Order): void {
    throw new Error("Method not implemented.");
  }
}

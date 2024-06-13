import Order from "../Order";
import PaymentMethod from "../PaymentMethod";

export default class OnlinePayment implements PaymentMethod {
  pay(order: Order): void {
    throw new Error("Method not implemented.");
  }
}

import Order from "../Order";
import PaymentMethod from "../PaymentMethod";

export default class CreditPayment implements PaymentMethod {
  pay(order: Order): void {
    if (order.price() > order.customer().credit()) {
      throw new Error("موجودی اعتبار شما کافی نمی باشد");
    }
  }
}

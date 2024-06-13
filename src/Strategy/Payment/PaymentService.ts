import Order from "./Order";
import PaymentMethod from "./PaymentMethod";

export default class PaymentService {
  private _paymentMethod!: PaymentMethod;

  public setPaymentMethod(paymentMethod: PaymentMethod) {
    this._paymentMethod = paymentMethod;
  }

  public startPay(order: Order): void {
    this._paymentMethod.pay(order);
  }
}

import DeliveryMethod from "./DeliveryMethod";
import Order from "./Order";

export default class DeliveryService {
  constructor(private deliverMethod: DeliveryMethod) {}

  public deliver(order: Order) {
    const price = this.deliverMethod.price(order);

    this.deliverMethod.deliver(order);
  }
}

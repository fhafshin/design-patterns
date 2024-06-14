import DeliveryMethod from "../DeliveryMethod";
import Order from "../Order";

export default class PaykDelivery implements DeliveryMethod {
  deliver(order: Order): void {
    throw new Error("Method not implemented.");
  }
  price(order: Order): number {
    throw new Error("Method not implemented.");
  }
}

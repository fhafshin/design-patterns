import DeliveryService from "./DeliveryService";
import ExpressDelivery from "./Methods/ExpressDelivery";
import Order from "./Order";

export default class Client {
  public deliveryOrder(order: Order) {
    const deliveryService = new DeliveryService(new ExpressDelivery());

    deliveryService.deliver(order);
  }
}
7;

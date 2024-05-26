import Order from "./Order";
import OrderBuilder from "./OrderBuilder";

export default class OrderService {
  public reOrder(order: Order) {
    order.cancel();
    const newOrder: Order = OrderBuilder.onOrder(order)

      .withCustomer("klnlknlknl")
      .build();
  }
}

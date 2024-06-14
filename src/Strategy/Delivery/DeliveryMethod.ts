import Order from "./Order";

export default interface DeliveryMethod {
  deliver(order: Order): void;
  price(order: Order): number;
}

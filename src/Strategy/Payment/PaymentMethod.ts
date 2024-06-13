import Order from "./Order";

export default interface PaymentMethod {
  pay(order: Order): void;
}

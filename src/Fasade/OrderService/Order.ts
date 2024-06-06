import OrderLine from "./OrderLine";

export default class Order {
  constructor(
    private user: number,
    orderLine: OrderLine[],
    total: number,
    coupon: string
  ) {}

  public static create(
    user: number,
    orderLine: OrderLine[],
    total: number,
    coupon: string
  ) {
    return new Order(user, orderLine, total, coupon);
  }
}

import Order from "./Order";

export default abstract class OrderStatus {
  protected _order!: Order;
  public setOrder(order: Order) {
    this._order = order;
  }

  public abstract pending(): void;
  public abstract paid(): void;
  public abstract ready(): void;
  public abstract sent(): void;
  public abstract delivered(): void;
}

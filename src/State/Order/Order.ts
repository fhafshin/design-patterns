import OrderStatus from "./OrderStatus";
import PendingStatus from "./OrderStatuses/PendingStatus";

export default class Order {
  private _status!: OrderStatus;

  public transitTo(status: OrderStatus): void {
    this._status = status;
    this._status.setOrder(this);
  }

  constructor() {
    this.transitTo(new PendingStatus());
  }

  public paid(): void {
    this._status.paid();
  }
}

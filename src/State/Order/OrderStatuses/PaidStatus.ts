import OrderStatus from "../OrderStatus";
import ReadyStatus from "./ReadyStatus";

export default class PaidStatus extends OrderStatus {
  public pending(): void {
    throw new Error("سفارش پرداخت شده نمی تواند به حالت انتضار برگردد");
  }
  public paid(): void {
    throw new Error("سفارش پرداخت شده نمی تواند دوباره پرداخت شود.");
  }
  public ready(): void {
    this._order.transitTo(new ReadyStatus());
  }
  public sent(): void {
    throw new Error("Method not implemented.");
  }
  public delivered(): void {
    throw new Error("Method not implemented.");
  }
}

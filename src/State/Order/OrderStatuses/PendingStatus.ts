import OrderStatus from "../OrderStatus";
import PaidStatus from "./PaidStatus";

export default class PendingStatus extends OrderStatus {
  public pending(): void {
    throw new Error("سفارش در انتضار نمی تواند دوباره به حالت در انتضار برود.");
  }
  public paid(): void {
    this._order.transitTo(new PaidStatus());
  }
  public ready(): void {
    throw new Error("سفارش در انتضار نمی تواند دوباره به حالت در آماده برود.");
  }
  public sent(): void {
    throw new Error("سفارش در انتضار نمی تواند دوباره به حالت در ارسال برود.");
  }
  public delivered(): void {
    throw new Error(
      "سفارش در انتضار نمی تواند دوباره به حالت در دریافت  برود."
    );
  }
}

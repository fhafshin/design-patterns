import OrderStatus from "../OrderStatus";

export default class SentStatus extends OrderStatus {
  public pending(): void {
    throw new Error("Method not implemented.");
  }
  public paid(): void {
    throw new Error("Method not implemented.");
  }
  public ready(): void {
    throw new Error("Method not implemented.");
  }
  public sent(): void {
    throw new Error("Method not implemented.");
  }
  public delivered(): void {
    throw new Error("Method not implemented.");
  }
}

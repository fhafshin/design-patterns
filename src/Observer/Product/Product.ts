import Observer from "../Contracts/Observer";
import Subject from "../Contracts/Subject";

export default class Product implements Subject {
  constructor(private price: number) {}
  attach(observer: Observer): void {
    throw new Error("Method not implemented.");
  }
  detach(observer: Observer): void {
    throw new Error("Method not implemented.");
  }
  notify(): void {
    throw new Error("Method not implemented.");
  }

  public changePrice(_price: number): void {
    this.price = _price;
  }
}

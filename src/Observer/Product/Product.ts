import Observer from "../Contracts/Observer";
import ObserverStorage from "../Contracts/ObserverStorage";
import Subject from "../Contracts/Subject";

export default class Product implements Subject {
  private _observerStorage: ObserverStorage;

  constructor(private price: number) {
    this._observerStorage = new ObserverStorage();
  }
  attach(name: string, observer: Observer): void {
    this._observerStorage.attach(name, observer);
  }
  detach(name: string, observer: Observer): void {
    this._observerStorage.detach(name, observer);
  }
  notify(): void {
    this._observerStorage.observers().forEach((observer: Observer) => {
      observer.update(this);
    });
  }

  public changePrice(_price: number): void {
    if (this.price == this.price) return;
    if (this.price < 0) throw new Error("price cannot be negative");
    this.price = _price;
    this.notify();
  }
}

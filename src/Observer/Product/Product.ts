import Observer from "../Contracts/Observer";
import ObserverStorage from "../Contracts/ObserverStorage";
import Subject from "../Contracts/Subject";

export default class Product implements Subject {
  private _observerStorage: ObserverStorage;

  constructor(private _price: number) {
    console.log(`price is ${_price}`);

    this._observerStorage = new ObserverStorage();
  }

  public price(): number {
    return this._price;
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

  public changePrice(price: number): void {
    if (this._price == price) return;
    if (this._price < 0) throw new Error("price cannot be negative");
    this._price = price;
    this.notify();
  }
}

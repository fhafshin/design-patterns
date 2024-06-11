import Observer from "../Contracts/Observer";
import ObserverStorage from "../Contracts/ObserverStorage";
import Subject from "../Contracts/Subject";
import OrderStatus from "./OrderStatus";
import orderStatus from "./OrderStatus";

export default class order implements Subject {
  private _status: orderStatus;
  private _observerStorage: ObserverStorage;
  constructor() {
    this._observerStorage = new ObserverStorage();
    this._status = orderStatus.PENDING;
  }
  public price() {
    return 1;
  }

  public process(): void {
    this._status = OrderStatus.PROCESSING;
    this.notify();
  }
  attach(name: string, observer: Observer): void {
    this._observerStorage.attach(name, observer);
  }
  detach(name: string, observer: Observer): void {
    this._observerStorage.detach(name, observer);
  }
  notify(): void {
    this._observerStorage
      .observers()
      .forEach((observer) => observer.update(this));
  }

  public status(): OrderStatus {
    return this._status;
  }
}

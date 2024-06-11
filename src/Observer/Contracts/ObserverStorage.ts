import Observer from "./Observer";

export default class ObserverStorage {
  private _observer: Map<string, Observer> = new Map();
  public attach(name: string, observer: Observer) {
    this._observer.set(name, observer);
  }

  public detach(name: string, observer: Observer) {
    this._observer.delete(name);
  }

  public observers(): Map<string, Observer> {
    return this._observer;
  }
}

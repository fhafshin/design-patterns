import Observer from "./Observer";

export default class EventDispatcher {
  private _observers: Map<string, Array<Observer>> = new Map<
    string,
    Array<Observer>
  >();

  public attach(event: string, observer: Observer): void {
    if (!this._observers.has(event)) {
      this._observers.set(event, []);
    }

    const observers = this._observers.get(event);

    if (!observers) {
      return;
    }
    observers.push(observer);
  }

  public detach(event: string, observer: Observer): void {
    if (this._observers.has(event)) {
      let observers = this._observers.get(event);
      let index = observers!.indexOf(observer);
      if (index > -1 && observers) {
        observers.splice(index, 1);
      }
    }
  }

  public fire(event: string, emitter: any, data: object): void {
    if (this._observers.has(event)) {
      const observers = this._observers.get(event);
      if (!observers) {
        return;
      }
      observers.forEach((observer) => {
        observer.update(event, emitter, data);
      });
    }
  }
}

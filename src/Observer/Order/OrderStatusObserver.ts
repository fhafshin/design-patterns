import Observer from "../Contracts/Observer";
import subject from "../Contracts/Subject";

export default class OrderStatusObserver implements Observer {
  update(subject: subject): void {
    throw new Error("Method not implemented.");
  }
}

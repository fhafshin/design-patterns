import Observer from "../Contracts/Observer";
import subject from "../Contracts/Subject";

export default class ProductPriceObserver implements Observer {
  update(subject: subject): void {}
}

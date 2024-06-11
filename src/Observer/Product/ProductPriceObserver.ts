import Observer from "../Contracts/Observer";
import subject from "../Contracts/Subject";
import Product from "./Product";

export default class ProductPriceObserver implements Observer {
  update(subject: subject): void {
    const _subject: Product = subject as Product;
    console.log(`update objected..... ${_subject.price()}`);
  }
}

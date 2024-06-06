export default class Product {
  constructor(private _title: string, private _price: number) {}

  public title() {
    return this._title;
  }

  public price() {
    return this._price;
  }
}

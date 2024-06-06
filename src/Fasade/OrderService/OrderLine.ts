export default class OrderLine {
  constructor(
    private _title: string,
    private _price: number,
    private _quantify: number
  ) {}

  public price(): number {
    return this._price * this._quantify;
  }

  public title(): string {
    return this._title;
  }

  public quantify(): number {
    return this._quantify;
  }

  public static create(title: string, price: number, quantify: number) {
    return new OrderLine(title, price, quantify);
  }
}

export default class Invoice {
  constructor(private _title: string, private _price: number) {}

  public title(): string {
    return this._title;
  }

  public price(): number {
    return this._price;
  }
}

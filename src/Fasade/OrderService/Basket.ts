import Product from "./Product";

export default class Basket {
  private _items: Array<Product>;
  private _coupon: string;

  constructor() {
    this._items = [];
    this._coupon = "";
  }
  public add(product: Product) {
    this._items.push(product);
  }

  public total(): number {
    return this._items.reduce((total, product) => total + product.price(), 0);
  }

  public items(): Array<Product> {
    return this._items;
  }

  public applyCoupon(coupon: string) {
    this._coupon = coupon;
  }
  public coupon(): string {
    return this._coupon;
  }
}

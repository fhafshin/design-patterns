import OrderItem from "./OrderItem";
export default class Order {
  constructor(
    private _customer: string,

    private _totalPrice: number,

    private _finalPrice: number,

    private _createdAt: Date,

    private _deliveryAddress: string,

    private _status: string,
    private _items: Array<OrderItem>
  ) {}

  public customer(): string {
    return this._customer;
  }

  public totalPrice(): number {
    return this._totalPrice;
  }

  public finalPrice(): number {
    return this._finalPrice;
  }

  public createdAt(): Date {
    return this._createdAt;
  }

  public deliveryAddress(): string {
    return this._deliveryAddress;
  }

  public status(): string {
    return this._status;
  }

  public items(): Array<OrderItem> {
    return this._items;
  }

  public cancel(): void {
    this._status = "cancelled";
  }
}

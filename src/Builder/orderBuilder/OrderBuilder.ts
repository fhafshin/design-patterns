import Order from "./Order";
import OrderItem from "./OrderItem";

export default class OrderBuilder {
  private _customer?: string;

  private _totalPrice?: number;

  private _finalPrice?: number;

  private _createdAt?: Date;

  private _deliveryAddress?: string;

  private _status?: string;
  private _items?: Array<OrderItem>;

  private _order?: Order;

  private constructor(order?: Order) {
    this._order = order;
  }

  public static onOrder(order?: Order): OrderBuilder {
    return new OrderBuilder(order);
  }

  public withCustomer(customer: string): OrderBuilder {
    this._customer = customer;
    return this;
  }

  public withTotalPrice(totalPrice: number): OrderBuilder {
    this._totalPrice = totalPrice;
    return this;
  }

  public withFinalPrice(finalPrice: number): OrderBuilder {
    this._finalPrice = finalPrice;
    return this;
  }

  public withCreatedAt(createdAt: Date): OrderBuilder {
    this._createdAt = createdAt;
    return this;
  }

  public withDeliveryAddress(deliveryAddress: string): OrderBuilder {
    this._deliveryAddress = deliveryAddress;
    return this;
  }

  public withStatus(status: string): OrderBuilder {
    this._status = status;
    return this;
  }

  public withItems(items: Array<OrderItem>): OrderBuilder {
    this._items = items;
    return this;
  }
  public build(): Order {
    return new Order(
      this._customer || (this._order?.customer() as string),
      this._totalPrice || (this._order?.totalPrice() as number),
      this._finalPrice || (this._order?.finalPrice() as number),
      this._createdAt || (this._order?.createdAt() as Date),
      this._deliveryAddress || (this._order?.deliveryAddress() as string),
      this._status || (this._order?.status() as string),
      this._items || (this._order?.items() as Array<OrderItem>)
    );
  }
}

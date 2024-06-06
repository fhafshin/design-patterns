import Basket from "./Basket";
import CouponService from "./CouponService";
import Order from "./Order";
import OrderLine from "./OrderLine";
import StockService from "./StockService";

export default class PlaceOrder {
  constructor(
    private _couponService: CouponService,
    private _stockService: StockService
  ) {}
  public place(basket: Basket) {
    //check product

    basket.items().forEach((product) => {
      console.log(`checking stock of ${product.title()}`);
      if (!this._stockService.exist(product)) {
        throw new Error(`product ${product.title()} is out of stock`);
      }
    });

    //check coupon

    if (!this._couponService.exist(basket.coupon())) {
      throw new Error(`coupon ${basket.coupon()} is invalid`);
    }
    //check if order is valid
    //create order

    const orderLine = basket
      .items()
      .map((product) => OrderLine.create(product.title(), product.price(), 1));

    const order = Order.create(1, orderLine, basket.total(), basket.coupon());
  }
}

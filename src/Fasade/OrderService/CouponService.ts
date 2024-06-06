import Basket from "./Basket";

export default class CouponService {
  public exist(coupon: string) {
    console.log(`checking coupon for ${coupon}`);
    return true;
  }
}

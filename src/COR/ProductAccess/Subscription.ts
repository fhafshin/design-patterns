import Product from "./Product";
import User from "./User";

export default class Subscription {
  isActive() {
    return true;
  }
  public static findByUserAndProduct(
    user: User,
    product: Product
  ): Subscription {
    console.log(`${user} ${product}`);
    return new Subscription();
  }

  public isExpired(): boolean {
    return false;
  }
}

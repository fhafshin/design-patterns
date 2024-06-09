import Product from "../Product";
import Subscription from "../Subscription";
import User from "../User";
import Verifier from "../Verifier";

export default class ExpirationVerifier extends Verifier {
  public verify(user: User, product: Product): boolean {
    const subScription = Subscription.findByUserAndProduct(user, product);
    if (subScription.isExpired()) {
      return false;
    }

    return super.verify(user, product);
  }
}

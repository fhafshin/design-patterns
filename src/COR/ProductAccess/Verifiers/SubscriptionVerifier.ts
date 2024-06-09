import Product from "../Product";
import Subscription from "../Subscription";
import User from "../User";
import Verifier from "../Verifier";

export default class SubscriptionVerifier extends Verifier {
  public verify(user: User, product: Product): boolean {
    const subscription = Subscription.findByUserAndProduct(user, product);
    if (!subscription) {
      return false;
    }
    return super.verify(user, product);
  }
}

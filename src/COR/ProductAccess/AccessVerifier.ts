import Product from "./Product";
import Subscription from "./Subscription";
import User from "./User";
import Verifier from "./Verifier";
import ActivationVerifier from "./Verifiers/ActivationVerifier";
import SubscriptionVerifier from "./Verifiers/SubscriptionVerifier";
import ExpirationVerifier from "./Verifiers/ExpirationVerifier";

export default class AccessVerifier {
  public verify(user: User, product: Product): boolean {
    return this.buildAccessChain().verify(user, product);
  }

  private buildAccessChain(): Verifier {
    const activationVerifier = new ActivationVerifier(null);

    const expirationVerifier = new ExpirationVerifier(activationVerifier);

    return new SubscriptionVerifier(expirationVerifier);
  }
}

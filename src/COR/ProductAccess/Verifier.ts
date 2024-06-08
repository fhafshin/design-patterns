import Product from "./Product";
import User from "./User";

type Nullable<T> = T | null;
export default abstract class Verifier {
  constructor(private _verifier: Nullable<Verifier>) {
    this._nextVerifier = _verifier;
  }

  private _nextVerifier: Nullable<Verifier>;

  public verify(user: User, product: Product): boolean {
    if (!this._nextVerifier) return true;

    return this._nextVerifier?.verify(user, product) as boolean;
  }
}

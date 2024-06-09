import Checker from "../Checker";
import RegistrationRequest from "../RegistrationRequest";

export default class ReferralChecker extends Checker {
  public check(request: RegistrationRequest): boolean {
    if (!this.isReferrerValid(request.referrer())) {
      return false;
    }

    return super.check(request);
  }
  isReferrerValid(referrer: string): boolean {
    return true;
  }
}

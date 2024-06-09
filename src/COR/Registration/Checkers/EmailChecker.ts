import Checker from "../Checker";
import RegistrationRequest from "../RegistrationRequest";

export default class EmailChecker extends Checker {
  public check(request: RegistrationRequest): boolean {
    if (!this.isEmailValid(request.emailAddress())) {
      return false;
    }
    return super.check(request);
  }

  private isEmailValid(email: string): boolean {
    return true;
  }
}

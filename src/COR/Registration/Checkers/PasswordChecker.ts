import Checker from "../Checker";
import RegistrationRequest from "../RegistrationRequest";

export default class PasswordChecker extends Checker {
  public check(request: RegistrationRequest): boolean {
    if (this.isPasswordValid(request.password())) {
      return false;
    }
    return super.check(request);
  }

  private isPasswordValid(password: string): boolean {
    return true;
  }
}

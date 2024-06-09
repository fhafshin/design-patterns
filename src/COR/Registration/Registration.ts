import Checker from "./Checker";
import EmailChecker from "./Checkers/EmailChecker";
import PasswordChecker from "./Checkers/PasswordChecker";
import ReferralChecker from "./Checkers/ReferralChecker";
import RegistrationRequest from "./RegistrationRequest";

export default class Registration {
  public register(request: RegistrationRequest) {
    const conRegister: boolean = this.buildChain().check(request);
    if (!conRegister) {
      throw new Error("Registration failed");
    }
  }
  private buildChain(): Checker {
    return new EmailChecker(new PasswordChecker(new ReferralChecker()));
  }
}

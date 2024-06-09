import RegistrationRequest from "./RegistrationRequest";

export default abstract class Checker {
  constructor(private nextChecker?: Checker) {}

  public check(request: RegistrationRequest): boolean {
    if (!this.nextChecker) {
      return true;
    }
    return this.nextChecker?.check(request) as boolean;
  }
}

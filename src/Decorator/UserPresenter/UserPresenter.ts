import User from "./User";

export default class UserPresenter {
  constructor(private user: User) {}

  fullName(): string {
    return `${this.user.firsName} ${this.user.lastName}`;
  }
}

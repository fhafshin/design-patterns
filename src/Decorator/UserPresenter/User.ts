import UserPresenter from "./UserPresenter";

export default class User {
  constructor(
    private _firstName: string,
    private _lastName: string,
    private _email: string,
    private _registerData: Date
  ) {}

  public firsName() {
    return this._firstName;
  }

  public lastName() {
    return this._lastName;
  }

  public email() {
    return this._email;
  }

  public registerDate() {
    return this._registerData;
  }

  public presenter(): UserPresenter {
    return new UserPresenter(this);
  }
}

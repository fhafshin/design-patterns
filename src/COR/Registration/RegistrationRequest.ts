export default class RegistrationRequest {
  constructor(
    private _emailAddress: string,
    private _password: string,
    private _referrer: string
  ) {}

  public emailAddress(): string {
    return this._emailAddress;
  }
  public password(): string {
    return this._password;
  }
  public referrer(): string {
    return this._referrer;
  }
}

export default class Alert {
  constructor(private _message: string, private _level: string) {}

  public message(): string {
    return this._message;
  }

  public level(): string {
    return this._level;
  }
}

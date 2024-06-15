export default class User {
  private _userID: number;

  constructor(userId: number) {
    this._userID = userId;
  }
  public userID(): number {
    return this._userID;
  }
}

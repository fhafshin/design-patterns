import User from "./User";

export default class CustomerAccount {
  constructor(
    private _user: User,
    private _rate: number,
    private _balance: number
  ) {}
  public save() {}
}

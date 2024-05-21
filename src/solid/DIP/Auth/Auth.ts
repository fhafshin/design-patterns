import IUserProvider from "./IUserProvider";

export default class Auth {
  private _userProvider: IUserProvider;

  constructor(userProvider: IUserProvider) {
    this._userProvider = userProvider;
  }

  public check(userName: string, passWord: string): boolean {
    const userExists = this._userProvider.findUser("", "");
    if (!userExists) {
      throw new Error("user not found");
    }

    return true;
  }
}

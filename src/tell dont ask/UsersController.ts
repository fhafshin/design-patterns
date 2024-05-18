import User from "./User";

export default class UserController {
  public increaseWalletAction() {
    const user: User = new User("afshin", "hasani");

    user.setWallet(user.getWallet() + 100);
  }
}

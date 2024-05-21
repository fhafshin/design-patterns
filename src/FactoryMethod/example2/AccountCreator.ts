import Account from "./Account";
import CustomerAccount from "./CustomerAccount";
import User from "./User";

export default abstract class AccountCreator {
  public abstract createAccount(): Account;

  public registerAccount(user: User, balance: number): CustomerAccount {
    const account: Account = this.createAccount();
    if (balance < account.minimumBalance()) {
      throw new Error("موجودی اولیه کمتر از حد مجاز است");
    }

    const customerAccount = new CustomerAccount(
      user,
      account.interestRate(),
      balance
    );
    customerAccount.save();
    return customerAccount;
  }
}

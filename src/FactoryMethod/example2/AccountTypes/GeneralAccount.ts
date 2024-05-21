import Account from "../Account";

export default class GeneralAccounts implements Account {
  interestRate(): number {
    return 0.1;
  }
  minimumBalance(): number {
    return 1000000;
  }
}

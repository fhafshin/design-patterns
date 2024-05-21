import Account from "../Account";

export default class SilverAccount implements Account {
  interestRate(): number {
    return 0.15;
  }
  minimumBalance(): number {
    return 10000000;
  }
}

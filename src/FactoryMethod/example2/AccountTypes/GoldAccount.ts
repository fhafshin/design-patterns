import Account from "../Account";

export default class GoldAccount implements Account {
  interestRate(): number {
    return 0.2;
  }
  minimumBalance(): number {
    return 100000000;
  }
}

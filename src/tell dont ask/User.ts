export default class User {
  private firstName: string;
  private lastName: string;
  private wallet: number = 0;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public getWallet(): number {
    return this.wallet;
  }

  public setWallet(value: number) {
    this.wallet = value;
  }
  //برای هر رفتار یک فانکشن ایجاد کن
  public increaseWallet(amount: number): void {
    if (amount <= 0) {
      throw new Error("amount must be greater than zero");
    }
    this.wallet += amount;
  }
}

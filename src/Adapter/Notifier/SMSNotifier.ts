import Notifier from "./Notifier";

export default class SMSNotifier implements Notifier {
  private _phoneNumber: string;
  constructor(phoneNumber: string) {
    this._phoneNumber = phoneNumber;
  }
  send(message: string): void {
    console.log(`sending sms to ${this._phoneNumber} : ${message}`);
  }
}

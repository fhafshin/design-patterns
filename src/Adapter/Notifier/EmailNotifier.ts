import Notifier from "./Notifier";

export default class EmailNotifier implements Notifier {
  private _emailAddress: string;

  constructor(emailAddress: string) {
    this._emailAddress = emailAddress;
  }
  send(message: string): void {
    console.log(`sending email to ${this._emailAddress} : ${message}`);
  }
}

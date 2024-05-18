import ISenderMail from "./ISenderMail";
import IFactoryMail from "./IFactoryMail";
export default class confirmMail implements ISenderMail {
  private IFactoryMail: IFactoryMail;

  constructor(IFactoryMail: IFactoryMail) {
    this.IFactoryMail = IFactoryMail;
  }
  sendMail(): void {
    const msg = this.IFactoryMail.getMessage();
  }
}

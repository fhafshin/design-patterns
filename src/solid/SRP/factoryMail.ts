import IFactoryMail from "./IFactoryMail";
import ITempleteMail from "./ITempleteMail";
import ITranslateMail from "./ITransateMail";

export default class factoryMail implements IFactoryMail {
  ITranslateMail: ITranslateMail;
  ITempleteMail: ITempleteMail;

  constructor(ITranslateMail: ITranslateMail, ITempleteMail: ITempleteMail) {
    this.ITempleteMail = ITempleteMail;
    this.ITranslateMail = ITranslateMail;
  }

  getMessage(): string {
    return (
      this.ITempleteMail.createTemplate() +
      " " +
      this.ITranslateMail.translator()
    );
  }
}

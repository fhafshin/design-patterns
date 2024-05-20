import IFactoryMail from "./IFactoryMail";
import ITemplateMail from "./ITemplateMail";
import ITranslateMail from "./ITranslateMail";

export default class factoryMail implements IFactoryMail {
  ITranslateMail: ITranslateMail;
  ITemplateMail: ITemplateMail;

  constructor(ITranslateMail: ITranslateMail, ITemplateMail: ITemplateMail) {
    this.ITemplateMail = ITemplateMail;
    this.ITranslateMail = ITranslateMail;
  }

  getMessage(): string {
    return (
      this.ITemplateMail.createTemplate() +
      " " +
      this.ITranslateMail.translator()
    );
  }
}

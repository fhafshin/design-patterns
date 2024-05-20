import IFactoryMail from "./IFactoryMail";
import ITemplateMail from "./ITemplateMail";
import ITranslateMail from "./ITranslateMail";

export default class FactoryMail implements IFactoryMail {
  iTranslateMail: ITranslateMail;
  iTemplateMail: ITemplateMail;

  constructor(iTranslateMail: ITranslateMail, iTemplateMail: ITemplateMail) {
    this.iTranslateMail = iTranslateMail;
    this.iTemplateMail = iTemplateMail;
  }

  getMessage(): string {
    return (
      this.iTemplateMail.createTemplate() +
      " " +
      this.iTranslateMail.translator()
    );
  }
}

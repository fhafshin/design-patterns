import ITemplateMail from "./ITemplateMail";
import ITranslateMail from "./ITranslateMail";

export default interface IFactoryMail {
  iTranslateMail: ITranslateMail;
  iTemplateMail: ITemplateMail;

  getMessage(): string;
}

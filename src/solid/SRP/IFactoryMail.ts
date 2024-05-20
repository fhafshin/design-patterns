import ITemplateMail from "./ITemplateMail";
import ITranslateMail from "./ITranslateMail";

export default interface IFactoryMail {
  ITranslateMail: ITranslateMail;
  ITemplateMail: ITemplateMail;

  getMessage(): string;
}

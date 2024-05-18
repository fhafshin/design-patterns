import ITempleteMail from "./ITempleteMail";
import ITranslateMail from "./ITransateMail";

export default interface IFactoryMail {
  ITranslateMail: ITranslateMail;
  ITempleteMail: ITempleteMail;

  constructor(ITranslateMail: ITranslateMail, ITempleteMail: ITempleteMail): {};

  getMessage(): string;
}

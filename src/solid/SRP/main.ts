import confirmMail from "./confirmMail";
import factoryMail from "./factoryMail";
import templeteMail from "./templeteMail";
import translateMail from "./translateMail";

export default class main {
  public sendMail() {
    const TranslateMail = new translateMail("sample");
    const TempleteMail = new templeteMail("sample");

    const FactoryMail = new factoryMail(TranslateMail, TempleteMail);
    const mail = new confirmMail(FactoryMail);
  }
}

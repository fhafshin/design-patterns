import confirmMail from "./confirmMail";
import factoryMail from "./factoryMail";
import templateMail from "./templateMail";
import translateMail from "./translateMail";

export default class main {
  public sendMail() {
    const TranslateMail = new translateMail("sample");
    const TemplateMail = new templateMail("sample");

    const FactoryMail = new factoryMail(TranslateMail, TemplateMail);
    const mail = new confirmMail(FactoryMail);
  }
}

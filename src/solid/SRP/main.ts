import confirmMail from "./confirmMail";
import FactoryMail from "./factoryMail";
import TemplateMail from "./templateMail";
import TranslateMail from "./translateMail";

export default class main {
  public sendMail() {
    const translateMail = new TranslateMail("sample");
    const templateMail = new TemplateMail("sample");

    const factoryMail = new FactoryMail(translateMail, templateMail);

    const mail = new confirmMail(factoryMail);
  }
}

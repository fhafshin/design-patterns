import ITranslateMail from "./ITransateMail";

export default class translateMail implements ITranslateMail {
  text: string;

  constructor(value: string) {
    this.text = value;
  }

  translator(): string {
    return this.text;
  }
}
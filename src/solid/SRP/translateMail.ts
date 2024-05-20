import ITranslateMail from "./ITranslateMail";

export default class TranslateMail implements ITranslateMail {
  text: string;

  constructor(value: string) {
    this.text = value;
  }

  translator(): string {
    return this.text;
  }
}

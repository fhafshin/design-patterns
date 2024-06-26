import ITemplateMail from "./ITemplateMail";

export default class TemplateMail implements ITemplateMail {
  text: string;

  constructor(value: string) {
    this.text = value;
  }
  createTemplate(): string {
    return this.text;
  }
}

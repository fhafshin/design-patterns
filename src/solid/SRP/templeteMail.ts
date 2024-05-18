import ITempleteMail from "./ITempleteMail";

export default class templeteMail implements ITempleteMail {
  text: string;

  constructor(value: string) {
    this.text = value;
  }
  createTemplate(): string {
    return this.text;
  }
}

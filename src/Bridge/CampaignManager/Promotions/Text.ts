import Promotion from "../Promotion";

export default class Text implements Promotion {
  constructor(private _title: string, private _link: string) {}
  display(): string {
    return `<a href="${this._link}">${this._title}</a>`;
  }
}

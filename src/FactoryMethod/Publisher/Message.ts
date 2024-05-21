import IMessage from "./IMessage";

export default class Message implements IMessage {
  constructor(
    private _title: string,
    private _image: string,
    private _content: string
  ) {
    console.log(_content);
  }

  public tittle() {
    return this._title;
  }

  public image() {
    return this._image;
  }

  public content() {
    return this._content;
  }
}

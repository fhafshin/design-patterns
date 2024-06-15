import User from "./User";

export default class Message {
  private _message: string;
  private _sender: number;
  private _reciever: number;

  constructor(message: string, sender: number, reciever: number) {
    this._message = message;
    this._sender = sender;
    this._reciever = reciever;
  }

  public message() {
    return this._message;
  }

  public sender() {
    return this._sender;
  }

  public reciever(): number {
    return this._reciever;
  }
}

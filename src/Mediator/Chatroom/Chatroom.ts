import Emmiter from "./Emmiter";
import Message from "./Message";
import User from "./User";

export default class Chatroom {
  private _users: Map<number, User> = new Map<number, User>();
  private _emmiter!: Emmiter;
  public addUser(user: User, emmiter: Emmiter) {
    this._users.set(user.userID(), user);
    this._emmiter = emmiter;
  }

  public removeUser(userID: number) {
    this._users.delete(userID);
  }

  public send(message: Message) {
    const user = this._users.get(message.reciever());

    if (!user) {
      return;
    }

    this._emmiter.emit(user, message);
  }
}

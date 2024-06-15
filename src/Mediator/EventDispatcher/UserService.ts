import EventDispatcher from "./EventDispatcher";

export default class UserService {
  constructor(private _eventDispatcher: EventDispatcher) {}

  public removeUser(userId: number): void {
    this._eventDispatcher.fire("user:removed", this, { userId: userId });
  }
}

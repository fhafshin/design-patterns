import { Identifier } from "typescript";
import NestDispatcher from "./NestDispatcher";
import UserRegisterParams from "./UserRegisterParams";
import IDispatcher from "./IDispatcher";

export default class UserService {
  private _dispatcher: IDispatcher;

  constructor(dispatcher: IDispatcher) {
    this._dispatcher = dispatcher;
  }

  public register(params: UserRegisterParams): void {
    //user registration process
    //.....
    this._dispatcher.dispatch("UserRegister", {
      firstName: "afshin",
      lastName: "asadi",
      email: "afes@gsdg.com",
      userName: "sdgsdg",
      passWord: "123",
    } as UserRegisterParams);
  }
}

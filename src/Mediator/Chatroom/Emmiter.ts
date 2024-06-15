import Message from "./Message";
import User from "./User";

export default interface Emmiter {
  emit(reciever: User, message: Message): void;
}

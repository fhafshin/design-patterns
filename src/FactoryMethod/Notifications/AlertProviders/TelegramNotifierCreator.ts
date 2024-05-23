import Notifier from "../Notifier";
import NotifierCreator from "../NotifierCreator";
import TelegramNotifier from "./TelegramNotifier";

export default class TelegramNotifierCreator extends NotifierCreator {
  public createNotication(): Notifier {
    return new TelegramNotifier();
  }
}

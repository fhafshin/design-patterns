import Notifier from "./Notifier";
import TelegramApi from "./TelegramApi";

export default class TelegranNotifierAdapter implements Notifier {
  constructor(private telegramApi: TelegramApi, private chatId: string) {}
  send(message: string): void {
    this.telegramApi.sendMessage(this.chatId, message);
  }
}

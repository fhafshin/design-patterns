import Notifier from "./Notifier";

export default class TelegramApi {
  sendMessage(chatId: string, message: string) {
    console.log(`sending sms to ${message} : ${chatId}`);
  }
}

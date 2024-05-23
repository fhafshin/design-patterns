import Alert from "../Alert";
import Notifier from "../Notifier";

export default class TelegramNotifier implements Notifier {
  Notify(alert: Alert): void {
    console.log(`${alert.message}`);
  }
}

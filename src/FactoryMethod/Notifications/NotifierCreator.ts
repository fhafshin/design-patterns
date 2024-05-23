import Alert from "./Alert";
import Notifier from "./Notifier";

export default abstract class NotifierCreator {
  public abstract createNotication(): Notifier;

  public notify(alert: Alert) {
    const notifier: Notifier = this.createNotication();
    notifier.Notify(alert);
  }
}

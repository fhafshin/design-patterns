import Alert from "./Alert";

export default interface Notifier {
  Notify(alert: Alert): void;
}

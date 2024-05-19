import Notifier from "./Notifier";

export default class Pusher implements Notifier {
  sendSMS(message: string): void {
    throw new Error("Method not implemented.");
  }
  sendEmail(message: string): void {
    throw new Error("Method not implemented.");
  }
  sendPushNotification(message: string): void {
    throw new Error("Method not implemented.");
  }
}

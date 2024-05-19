import Notifier from "./Notifier";

export default class IranSMSProvider implements Notifier {
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

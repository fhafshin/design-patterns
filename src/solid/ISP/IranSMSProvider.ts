import Notifier from "./Notifier";
import SMSProvider from "./SMSProvider";

export default class IranSMSProvider implements SMSProvider {
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

export default interface Notifier {
  sendSMS(message: string): void;
  sendEmail(message: string): void;
  sendPushNotification(message: string): void;
}

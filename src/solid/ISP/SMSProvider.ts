export default interface SMSProvider {
  sendSMS(message: string): void;
}

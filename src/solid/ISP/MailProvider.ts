export default interface MailProvider {
  sendEmail(message: string): void;
}

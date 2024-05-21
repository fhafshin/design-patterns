export default interface ITemplateMail {
  text: string;

  createTemplate(): string;
}

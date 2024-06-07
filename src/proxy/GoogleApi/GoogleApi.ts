import GoogleApiInterface from "./GoogleApiInterface";

export default class GoogleApi implements GoogleApiInterface {
  translate(
    text: string,
    sourceLanguage: string,
    targetLanguage: string
  ): Promise<string> {
    throw new Error("Method not implemented.");
  }
}

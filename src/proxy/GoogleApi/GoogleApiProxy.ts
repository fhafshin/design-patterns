import GoogleApiInterface from "./GoogleApiInterface";

export default class GoogleApiProxy implements GoogleApiInterface {
  constructor(private googleApi: GoogleApiInterface) {}

  translate(
    text: string,
    sourceLanguage: string,
    targetLanguage: string
  ): Promise<string> {
    if (process.env.APP_ENV !== "production") {
      return this.googleApi.translate(text, sourceLanguage, targetLanguage);
    }
    return Promise.resolve(text);
  }
}

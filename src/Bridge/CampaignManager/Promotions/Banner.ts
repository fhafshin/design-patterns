import Promotion from "../Promotion";

export default class Banner implements Promotion {
  constructor(
    private _title: string,
    private _bannerUrl: string,
    private _imageUrl: string
  ) {}
  display(): string {
    return `<a href="${this._bannerUrl}"><img src="${this._imageUrl}" alt="${this._title}" /></a>`;
  }
}

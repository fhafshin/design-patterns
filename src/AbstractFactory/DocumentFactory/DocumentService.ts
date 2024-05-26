import DocumentFactory from "./DocumentFactory";

export default class DocumentService {
  constructor(private _documentFactory: DocumentFactory) {}

  ctreateDocument(): string {
    return `${this._documentFactory.createHeader().generate()}
    ${this._documentFactory.createBody().generate()}
    ${this._documentFactory.createFooter().generate()}`;
  }
}

import Body from "../Body";

export default class PDFBody implements Body {
  generate(): string {
    return "PDF BODY";
  }
}

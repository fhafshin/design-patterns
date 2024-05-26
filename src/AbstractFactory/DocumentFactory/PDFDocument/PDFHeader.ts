import Header from "../Header";

export default class PDFHeader implements Header {
  generate(): string {
    return "PDF header";
  }
}

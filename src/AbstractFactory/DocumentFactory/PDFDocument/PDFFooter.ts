import Footer from "../Footer";

export default class PDFFooter implements Footer {
  generate(): string {
    return "PDF FOOTER";
  }
}

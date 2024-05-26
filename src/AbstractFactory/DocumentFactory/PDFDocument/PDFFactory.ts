import Body from "../Body";
import DocumentFactory from "../DocumentFactory";
import footer from "../Footer";
import Header from "../Header";
import PDFBody from "./PDFBody";
import PDFFooter from "./PDFFooter";
import PDFHeader from "./PDFHeader";

export default class PDFFactory implements DocumentFactory {
  createBody(): Body {
    return new PDFBody();
  }
  createHeader(): Header {
    return new PDFHeader();
  }
  createFooter(): footer {
    return new PDFFooter();
  }
}

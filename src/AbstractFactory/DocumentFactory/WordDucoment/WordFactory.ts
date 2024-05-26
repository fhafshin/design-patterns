import Body from "../Body";
import DocumentFactory from "../DocumentFactory";
import footer from "../Footer";
import Header from "../Header";
import WordBody from "./WordBody";
import WordFooter from "./WordFooter";
import WordHeader from "./WordHeader";

export default class WordFactory implements DocumentFactory {
  createBody(): Body {
    return new WordBody();
  }
  createHeader(): Header {
    return new WordHeader();
  }
  createFooter(): footer {
    return new WordFooter();
  }
}

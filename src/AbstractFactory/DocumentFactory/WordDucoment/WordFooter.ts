import Footer from "../Footer";

export default class WordFooter implements Footer {
  generate(): string {
    return "word footer";
  }
}

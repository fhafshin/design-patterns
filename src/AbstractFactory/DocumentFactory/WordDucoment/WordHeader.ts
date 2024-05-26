import Header from "../Header";

export default class WordHeader implements Header {
  generate(): string {
    return "word header";
  }
}

import Body from "../Body";

export default class WordBody implements Body {
  generate(): string {
    return "word body";
  }
}

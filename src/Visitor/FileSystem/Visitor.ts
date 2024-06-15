import Directory from "./Directory";
import File from "./File";

export default interface Visitor {
  visitFile(file: File): void;
  visitDirectory(directory: Directory): void;
}

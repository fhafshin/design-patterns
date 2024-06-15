import Directory from "./Directory";
import File from "./File";
import Visitor from "./Visitor";

export default class PrintVisitor implements Visitor {
  visitFile(file: File): void {
    console.log("print of file");
  }
  visitDirectory(directory: Directory): void {
    console.log("print of Directory");
  }
}

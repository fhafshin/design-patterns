import Directory from "./Directory";
import File from "./File";
import Visitor from "./Visitor";

export default class SizeVisitor implements Visitor {
  visitFile(file: File): void {
    console.log("size of file");
  }
  visitDirectory(directory: Directory): void {
    console.log("size of directory");
  }
}

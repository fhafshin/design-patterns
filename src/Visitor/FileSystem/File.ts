import FileSystem from "./FileSystem";
import Visitor from "./Visitor";

export default class File implements FileSystem {
  visit(visitor: Visitor): void {
    visitor.visitFile(this);
  }
}

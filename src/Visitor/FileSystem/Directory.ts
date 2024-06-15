import FileSystem from "./FileSystem";
import Visitor from "./Visitor";

export default class Directory implements FileSystem {
  visit(visitor: Visitor): void {
    visitor.visitDirectory(this);
  }
}

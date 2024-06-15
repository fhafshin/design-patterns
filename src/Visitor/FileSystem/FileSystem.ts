import Visitor from "./Visitor";

export default interface FileSystem {
  visit(visitor: Visitor): void;
}

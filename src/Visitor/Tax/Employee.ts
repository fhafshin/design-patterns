import Visitor from "./Visitor";

export default interface Employee {
  accept(visitor: Visitor): void;
}

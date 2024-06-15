import Visitor from "./Visitor";
import Employee from "./Employee";

export default class Manager implements Employee {
  accept(visitor: Visitor): void {
    visitor.visitHighRangeSalary(this);
  }
}

import Visitor from "./Visitor";
import Employee from "./Employee";

export default class Developer implements Employee {
  accept(visitor: Visitor): void {
    visitor.visitLowRangeSalary(this);
  }
}

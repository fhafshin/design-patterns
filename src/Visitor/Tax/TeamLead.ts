import Visitor from "./Visitor";
import Employee from "./Employee";

export default class TeamLead implements Employee {
  accept(visitor: Visitor): void {
    visitor.visitMidRangeSalary(this);
  }
}

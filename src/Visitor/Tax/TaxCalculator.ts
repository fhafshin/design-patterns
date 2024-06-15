import Developer from "./Developer";
import Manager from "./Manager";
import TeamLead from "./TeamLead";
import Visitor from "./Visitor";

export default class TaxCalculator implements Visitor {
  visitHighRangeSalary(manager: Manager): void {
    console.log(` 0.2`);
  }
  visitMidRangeSalary(teamLead: TeamLead): void {
    console.log(` 0.5`);
  }
  visitLowRangeSalary(developer: Developer): void {
    console.log(` 0.7`);
  }
}

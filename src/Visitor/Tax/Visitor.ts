import Developer from "./Developer";
import Manager from "./Manager";
import TeamLead from "./TeamLead";

export default interface Visitor {
  visitHighRangeSalary(manager: Manager): void;
  visitMidRangeSalary(teamLead: TeamLead): void;

  visitLowRangeSalary(developer: Developer): void;
}

import Salary from "./Salary";

export default class HourlySalary extends Salary {
  protected baseSalary(): number {
    return 0;
  }
  protected bonus(): number {
    return 0;
  }
}

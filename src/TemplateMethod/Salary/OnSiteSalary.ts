import Salary from "./Salary";

export default class OnSiteSalary extends Salary {
  protected baseSalary(): number {
    return 1000;
  }
  protected bonus(): number {
    return 200;
  }
}

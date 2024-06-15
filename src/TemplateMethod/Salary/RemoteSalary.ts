import Salary from "./Salary";

export default class RemoteSalary extends Salary {
  protected baseSalary(): number {
    return 1500;
  }
  protected bonus(): number {
    return 250;
  }
}

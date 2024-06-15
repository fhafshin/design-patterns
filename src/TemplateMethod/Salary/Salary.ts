export default abstract class Salary {
  protected abstract baseSalary(): number;
  protected abstract bonus(): number;
  public calculateSalary(): number {
    return this.baseSalary() + this.bonus() + this.extra();
  }

  private extra(): number {
    return 100;
  }
}

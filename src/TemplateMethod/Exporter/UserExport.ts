import User from "./User";

export default abstract class UserExporter {
  public export(): void {
    const users = this.fetchUsers();
    const data = this.prepare(users);
    this.process(data);
  }

  private fetchUsers(): Array<User> {
    return [new User("John", "Doe"), new User("Jane", "Doe")];
  }
  protected abstract process(users: Array<User>): void;

  protected abstract prepare(users: Array<User>): Array<User>;
}

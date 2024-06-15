export default class User {
  constructor(private firsName: string, private lastName: string) {}

  public getFirstName(): string {
    return this.firsName;
  }

  public getLastName(): string {
    return this.lastName;
  }
}

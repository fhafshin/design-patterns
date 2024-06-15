import User from "./User";
import UserExporter from "./UserExport";

export default class UserExporterInExcel extends UserExporter {
  protected process(users: User[]): void {
    throw new Error("Method not implemented.");
  }
  protected prepare(users: User[]): User[] {
    throw new Error("Method not implemented.");
  }
}

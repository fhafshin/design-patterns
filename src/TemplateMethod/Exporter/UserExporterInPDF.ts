import User from "./User";
import UserExporter from "./UserExport";

export default class UserExporterInPDF extends UserExporter {
  protected process(data: Array<User>): void {
    console.log("Processing PDF data...");
    console.log(data);
  }

  protected prepare(users: Array<User>): Array<User> {
    console.log("Preparing PDF data...");
    return users;
  }
}

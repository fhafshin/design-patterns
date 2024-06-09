import AddTaskCommand from "./AddTaskCommand";

export default class AddTaskHandler {
  public execute(addTaskCommand: AddTaskCommand): void {
    console.log("AddTaskHandler");
  }
}

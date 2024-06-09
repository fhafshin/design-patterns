import AddTaskCommand from "./AddTaskCommand";
import AddTaskHandler from "./AddTaskHandler";
import Request from "./Request";
export default class Controller {
  public addTask(request: Request) {
    const handler = new AddTaskHandler();
    const command = new AddTaskCommand(
      request.get("title"),
      request.get("description"),
      handler
    );

    command.execute();
  }
}

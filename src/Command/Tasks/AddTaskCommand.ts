import AddTaskHandler from "./AddTaskHandler";
import Command from "./Command";

export default class AddTaskCommand implements Command {
  private _title: string;
  private _description: string;
  private _handler: AddTaskHandler;

  constructor(title: string, description: string, handler: AddTaskHandler) {
    this._title = title;
    this._description = description;
    this._handler = handler;
  }

  execute(): void {
    this._handler.execute(this);
  }
}

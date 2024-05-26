import Task from "../Task";
import TaskImporter from "../TaskImporter";
import MSTodoApi from "../packages/MSTodoApi";

export default class MSTodoImporterAdapter implements TaskImporter {
  constructor(private _MSTodoApi: MSTodoApi) {}
  import(): Task[] {
    const taskList = this._MSTodoApi.getTask();

    return taskList.map(
      (task) => new Task(task.task, task.description, task.status)
    );
  }
}

import Task from "./Task";

export default interface TaskImporter {
  import(): Array<Task>;
}

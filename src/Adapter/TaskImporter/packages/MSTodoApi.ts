interface MSTOTask {
  task: string;
  description: string;
  status: string;
}

export default class MSTodoApi {
  public getTask(): Array<MSTOTask> {
    return [
      {
        task: "task1",
        description: "desc",
        status: "pending",
      },
    ];
  }
}

import express, { Express } from "express";

export default class application {
  private app: Express;

  constructor() {
    this.app = express();
  }

  public run(port: number): void {
    this.app.listen(port, () => {
      console.log(`server run on port ${port}`);
    });
  }
}

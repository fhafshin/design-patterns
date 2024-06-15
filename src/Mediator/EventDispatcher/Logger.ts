import Observer from "./Observer";

export default class Logger implements Observer {
  update(event: string, emitter: any, data: Object): void {
    console.log("event:", event);
    console.log("emitter:", emitter);

    console.log("data:", data);
  }
}

import IDispatcher from "./IDispatcher";

export default class NestDispatcher implements IDispatcher {
  public dispatch(event: string, payload: Object): void {
    console.log("dispatch....");
  }
}

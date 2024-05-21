import MessagePublisher from "../MessagePublisher";
import Publisher from "../Publisher";

export default class InstagramMessagePublisher extends MessagePublisher {
  public createPublisher(): Publisher {
    throw new Error("Method not implemented.");
  }
}

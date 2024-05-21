import MessagePublisher from "../Publisher/MessagePublisher";
import Publisher from "../Publisher/Publisher";
import InstagramPublisher from "./InstagramPublisher";

export default class InstagramMessagePublisher extends MessagePublisher {
  public createPublisher(): Publisher {
    return new InstagramPublisher();
  }
}

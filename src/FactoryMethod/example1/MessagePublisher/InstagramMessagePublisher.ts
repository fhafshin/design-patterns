import MessagePublisher from "../MessagePublisher";
import Publisher from "../Publisher";
import InstagramPublisher from "../Publisher/InstagramPublisher";

export default class InstagramMessagePublisher extends MessagePublisher {
  public createPublisher(): Publisher {
    return new InstagramPublisher();
  }
}

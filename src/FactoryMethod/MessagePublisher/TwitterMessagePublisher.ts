import MessagePublisher from "../Publisher/MessagePublisher";
import Publisher from "../Publisher/Publisher";
import TwitterPublisher from "./TwitterPublisher";

export default class TwitterMessagePublisher extends MessagePublisher {
  public createPublisher(): Publisher {
    return new TwitterPublisher();
  }
}

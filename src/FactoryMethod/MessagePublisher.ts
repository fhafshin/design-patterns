import Message from "./Message";
import Publisher from "./Publisher";

export default abstract class MessagePublisher {
  public abstract createPublisher(): Publisher;

  public publish(message: Message): void {
    const publisher: Publisher = this.createPublisher();
    publisher.publish(message);
  }
}

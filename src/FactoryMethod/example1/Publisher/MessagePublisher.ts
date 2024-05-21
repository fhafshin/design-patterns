import Message from "./Message";
import Publisher from "./Publisher";

export default abstract class MessagePublisher {
  public publish(message: Message): void {
    const publisher: Publisher = this.createPublisher();
    publisher.publish(message);
  }

  public abstract createPublisher(): Publisher;
}

import Message from "../Message";
import Publisher from "../Publisher";

export default class TwitterPublisher implements Publisher {
  publish(message: Message): void {
    console.log(
      `Twitter ${message.tittle()} - ${message.image()} - ${message.content()}`
    );
  }
}

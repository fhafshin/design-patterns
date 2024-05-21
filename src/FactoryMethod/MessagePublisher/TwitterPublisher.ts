import Message from "../Publisher/Message";
import Publisher from "../Publisher/Publisher";

export default class TwitterPublisher implements Publisher {
  publish(message: Message): void {
    console.log(
      `Twitter ${message.tittle()}} -${message.image()} - ${message.content()}`
    );
  }
}

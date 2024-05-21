import Message from "../Publisher/Message";
import Publisher from "../Publisher/Publisher";

export default class InstagramPublisher implements Publisher {
  publish(message: Message): void {
    console.log(
      `Instagram ${message.tittle()}} -${message.image()} - ${message.content()}`
    );
  }
}

import Message from "../Message";
import Publisher from "../Publisher";

export default class InstagramPublisher implements Publisher {
  publish(message: Message): void {
    console.log(
      `Instagram ${message.tittle()}} -${message.image()} - ${message.content()}`
    );
  }
}

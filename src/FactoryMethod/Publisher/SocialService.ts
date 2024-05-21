import Message from "./Message";
import MessagePublisher from "./MessagePublisher";

export default class SocialService {
  private _publisher: MessagePublisher;

  constructor(publisher: MessagePublisher) {
    this._publisher = publisher;
  }

  public publish(formRequest: any) {
    const message: Message = new Message(
      formRequest.title,
      formRequest.content,
      formRequest.image
    );

    this._publisher.publish(message);
  }
}

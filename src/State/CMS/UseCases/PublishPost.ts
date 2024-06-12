import Post from "../Post";
import DraftStatus from "../PostStatus/DraftStatus";

export default class PublishPost {
  public execute(): void {
    const post = new Post("simple title", "simple body");
    post.publish();
  }
}

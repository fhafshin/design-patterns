import PostStatus from "../PostStatus";
import DraftStatus from "./DraftStatus";

export default class PublishedStatus extends PostStatus {
  public draft(): void {
    this._post.transitionTo(new DraftStatus());
  }
  public published(): void {
    throw new Error("The post is already published.");
  }
  public moderation(): void {
    throw new Error("مطالب منتشر شده فقط می توانند به حالت پیشنویس برگردند");
  }
}

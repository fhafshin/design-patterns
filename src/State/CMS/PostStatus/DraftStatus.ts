import PostStatus from "../PostStatus";
import ModerationStatus from "./ModerationStatus";
import PublishedStatus from "./PublishedStatus";

export default class DraftStatus extends PostStatus {
  public draft(): void {
    this._post.transitionTo(new DraftStatus());
  }
  public published(): void {
    throw new Error("مطالب باید تایید شود");
  }
  public moderation(): void {
    this._post.transitionTo(new ModerationStatus());
  }
}

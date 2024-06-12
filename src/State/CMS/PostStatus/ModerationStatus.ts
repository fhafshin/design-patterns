import PostStatus from "../PostStatus";
import DraftStatus from "./DraftStatus";
import PublishedStatus from "./PublishedStatus";

export default class ModerationStatus extends PostStatus {
  public draft(): void {
    this._post.transitionTo(new DraftStatus());
  }
  public published(): void {
    this._post.transitionTo(new PublishedStatus());
  }
  public moderation(): void {
    this._post.transitionTo(new ModerationStatus());
  }
}

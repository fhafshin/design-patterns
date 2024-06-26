import PostStatus from "./PostStatus";
import DraftStatus from "./PostStatus/DraftStatus";

export default class Post {
  private _status!: PostStatus;
  constructor(private _title: string, private content: string) {
    this.transitionTo(new DraftStatus());
  }

  public transitionTo(status: PostStatus) {
    this._status = status;
    this._status.setPost(this);
  }

  public draft(): void {
    this._status.draft();
  }

  public publish(): void {
    this._status.published();
  }

  public moderation(): void {
    this._status.moderation();
  }
}

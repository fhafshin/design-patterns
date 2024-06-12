import Post from "./Post";

export default abstract class PostStatus {
  private _post?: Post;

  public setPost(post: Post) {
    this._post = post;
  }

  public abstract draft(): void;

  public abstract published(): void;
  public abstract moderation(): void;
}

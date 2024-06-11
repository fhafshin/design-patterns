import PostStatus from "../PostStatus";

export default class PublishedStatus extends PostStatus {
  public draft(): void {
    throw new Error("Method not implemented.");
  }
  public published(): void {
    throw new Error("Method not implemented.");
  }
  public moderation(): void {
    throw new Error("Method not implemented.");
  }
}

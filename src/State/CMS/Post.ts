import PostStatus from "./PostStatus";

export default class Post {
  constructor(private _title: string, content: string, _status: PostStatus) {}
}

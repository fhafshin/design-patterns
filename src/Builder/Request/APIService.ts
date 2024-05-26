import RequestBuilder from "./RequestBuilder";
import RequestBuilder2 from "./RequestBuilder2";

export default class APIService {
  public fetchUsers() {
    const request = RequestBuilder2.aRequest()
      .withUrl("/api/users")
      .withMethod("llll")
      .build();
    request.send();
  }
}

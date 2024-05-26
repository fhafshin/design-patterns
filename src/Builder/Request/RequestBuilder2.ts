import Request from "./Request";

export default class RequestBuilder2 {
  private _url: string = "";
  private _method: string = "";
  private _headers: object = {};
  private _body: object = {};
  private _agent: string = "";

  public static aRequest(): RequestBuilder2 {
    return new RequestBuilder2();
  }

  public withUrl(url: string) {
    this._url = url;
    return this;
  }

  public withMethod(method: string) {
    this._method = method;
    return this;
  }

  public withBody(body: object) {
    this._body = body;
    return this;
  }

  public withHeaders(headers: object) {
    this._headers = headers;
    return this;
  }

  public withAgent(agent: string) {
    this._agent = agent;
  }

  public build(): Request {
    return new Request(
      this._url,
      this._method,
      this._headers,
      this._body,
      this._agent
    );
  }
}

import Request from "./Request";

export default class RequestBuilder {
  private _url: string = "";
  private _method: string = "GET";
  private _headers: object = {};
  private _body: object = {};
  private _agent: string = "default";

  public static aRequest(): RequestBuilder {
    return new RequestBuilder();
  }

  public withUrl(url: string): RequestBuilder {
    this._url = url;
    return this;
  }
  public withMethod(method: string): RequestBuilder {
    this._method = method;
    return this;
  }

  public withHeaders(headers: object): RequestBuilder {
    this._headers = headers;
    return this;
  }

  public withBody(body: object): RequestBuilder {
    this._body = body;
    return this;
  }

  public withAgent(agent: string): RequestBuilder {
    this._agent = agent;
    return this;
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

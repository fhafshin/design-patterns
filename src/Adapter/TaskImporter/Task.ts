export default class Task {
  constructor(
    private _title: string,
    private _description: string,
    private _status: string
  ) {}

  public title(): string {
    return this._title;
  }
  public description(): string {
    return this._description;
  }
  public status(): string {
    return this._status;
  }
}

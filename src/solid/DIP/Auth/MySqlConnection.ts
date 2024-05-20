import Connection from "./Connection";

export default class MySqlConnection implements Connection {
  public query(sql: string): boolean {
    return true;
  }
}

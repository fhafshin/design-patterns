import Connection from "./Connection";
import IUserProvider from "./IUserProvider";
import MySqlConnection from "./MySqlConnection";

export default class MySqlUserProvider implements IUserProvider {
  private _connection: Connection;
  constructor(connection: Connection) {
    this._connection = connection;
  }

  findUser(username: string, passWord: string): boolean {
    const sql = `select * from users where username=${username}`;
    const result = this._connection.query(sql);
    return result;
  }
}

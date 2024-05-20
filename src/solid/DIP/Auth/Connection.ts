export default interface Connection {
  query(sql: string): boolean;
}

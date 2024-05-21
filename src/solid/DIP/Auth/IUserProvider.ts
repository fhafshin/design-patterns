export default interface IUserProvider {
  findUser(username: string, passWord: string): boolean;
}

import UserProfile from "./UserProfile";

export default class User {
  constructor(
    private _firstName: string,
    private _lastName: string,
    private _profile: UserProfile
  ) {}
}

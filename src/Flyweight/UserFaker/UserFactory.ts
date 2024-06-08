import User from "./User";
import UserProfile from "./UserProfile";

import crypto from "crypto";

export default class UserFactory {
  private _usersProfile: Map<string, UserProfile> = new Map();

  public createUser(
    _firstName: string,
    _lastName: string,
    _gender: string,
    _age: string,
    _province: string
  ) {
    const userProfile: UserProfile = this.createUserProfile(
      _gender,
      _age,
      _province
    );
    return new User(_firstName, _lastName, userProfile);
  }

  private createUserProfile(
    _gender: string,
    _age: string,
    _province: string
  ): UserProfile {
    const key: string = this.createKey(_gender, _age, _province);

    if (!this._usersProfile.has(key)) {
      this._usersProfile.set(key, new UserProfile(_gender, _age, _province));
    }

    return this._usersProfile.get(key) as UserProfile;
  }
  createKey(_gender: string, _age: string, _province: string): string {
    return crypto.createHash(`${_gender} ${_age} ${_province}`).digest("hex");
  }
}

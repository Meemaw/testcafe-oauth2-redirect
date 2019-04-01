import LocalStorage from "./storage";

export const AUTH_STORAGE_KEY_ITEM = "auth";

type Authorization = {
  access_token: string;
  expires_in: number;
  id_token: string;
  state: string;
};

class Auth {
  static getAuthorizationHeader = () => {
    return "Bearer " + Auth.getAccessToken();
  };

  static getAccessToken = (): string => {
    const authorization = Auth.getAuthorization();
    return authorization ? authorization.access_token : "";
  };

  static getAuthorization = (): Authorization | undefined => {
    return LocalStorage.getStorageKeyItem(AUTH_STORAGE_KEY_ITEM);
  };

  static deleteAuthorization = () => {
    LocalStorage.deleteStorageKey(AUTH_STORAGE_KEY_ITEM);
  };
}

export default Auth;

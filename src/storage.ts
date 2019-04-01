const LOCAL_STORAGE_IDENTIFIER = "app";
const DEFAULT_STORAGE_STATE = "{}";

class LocalStorage {
  static getStorageKeyItem = (key: string) => {
    return LocalStorage.getStorageObject()[key];
  };

  static getStorageObject = () => {
    return JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_IDENTIFIER) || DEFAULT_STORAGE_STATE
    );
  };

  static setStorageObject = (obj: object) => {
    localStorage.setItem(LOCAL_STORAGE_IDENTIFIER, JSON.stringify(obj));
  };

  static deleteStorageKey = (key: string) => {
    const storageItem = LocalStorage.getStorageObject();
    delete storageItem[key];
    LocalStorage.setStorageObject(storageItem);
  };
}

export default LocalStorage;

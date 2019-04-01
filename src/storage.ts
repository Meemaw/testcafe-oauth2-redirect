const LOCAL_STORAGE_IDENTIFIER = "app";
const DEFAULT_STORAGE_STATE = "{}";

class LocalStorage {
  static getAndDeleteStorageKeyItem = (key: string) => {
    const item = LocalStorage.getStorageKeyItem(key);
    LocalStorage.deleteStorageKey(key);
    return item;
  };

  static getStorageKeyItem = (key: string) => {
    return LocalStorage.getStorageObject()[key];
  };

  static getStorageObject = () => {
    return JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_IDENTIFIER) || DEFAULT_STORAGE_STATE
    );
  };

  static addStorageObject = (obj: object) => {
    const currentObject = LocalStorage.getStorageObject();
    localStorage.setItem(
      LOCAL_STORAGE_IDENTIFIER,
      JSON.stringify({ ...currentObject, ...obj })
    );
  };

  static setStorageObject = (obj: object) => {
    localStorage.setItem(LOCAL_STORAGE_IDENTIFIER, JSON.stringify(obj));
  };

  static setStorageItem = (key: string, item: object) => {
    const object = LocalStorage.getStorageObject();
    object[key] = item;
    LocalStorage.setStorageObject(object);
  };

  static deleteStorageKey = (key: string) => {
    const storageItem = LocalStorage.getStorageObject();
    delete storageItem[key];
    LocalStorage.setStorageObject(storageItem);
  };
}

export default LocalStorage;

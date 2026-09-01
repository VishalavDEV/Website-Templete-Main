export const getStorageData = <T>(key: string, fallback: T): T => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch (error) {
    console.error(`Error reading key "${key}" from localStorage:`, error);
    return fallback;
  }
};

export const setStorageData = <T>(key: string, value: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error setting key "${key}" to localStorage:`, error);
  }
};

export const storageService = {
  get: getStorageData,
  set: setStorageData,
};

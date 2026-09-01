export const storageService = {
  // LocalStorage helper
  local: {
    get<T>(key: string, fallback: T): T {
      try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : fallback;
      } catch {
        return fallback;
      }
    },
    set(key: string, value: any): void {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (err) {
        console.error(err);
      }
    },
    remove(key: string): void {
      localStorage.removeItem(key);
    }
  },

  // SessionStorage helper
  session: {
    get<T>(key: string, fallback: T): T {
      try {
        const item = sessionStorage.getItem(key);
        return item ? JSON.parse(item) : fallback;
      } catch {
        return fallback;
      }
    },
    set(key: string, value: any): void {
      try {
        sessionStorage.setItem(key, JSON.stringify(value));
      } catch (err) {
        console.error(err);
      }
    }
  },

  // Mock IndexedDB async abstraction
  db: {
    async getStore<T>(storeName: string): Promise<T[]> {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([]);
        }, 150);
      });
    },
    async saveItem<T>(storeName: string, item: T): Promise<void> {
      return new Promise((resolve) => {
        setTimeout(resolve, 100);
      });
    }
  }
};

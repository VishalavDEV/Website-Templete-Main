/* src/app/providers/QueryDataProvider.tsx */
import React, { createContext, useContext, useState, useCallback } from 'react';

type QueryState = {
  data: any;
  loading: boolean;
  error: Error | null;
};

type QueryContextType = {
  cache: Record<string, any>;
  fetchData: (key: string, fetcher: () => Promise<any>, forceRefresh?: boolean) => Promise<any>;
  isLoadingKey: (key: string) => boolean;
  invalidateKey: (key: string) => void;
};

const QueryDataContext = createContext<QueryContextType | undefined>(undefined);

export function QueryDataProvider({ children }: { children: React.ReactNode }) {
  const [cache, setCache] = useState<Record<string, any>>({});
  const [loadingKeys, setLoadingKeys] = useState<Record<string, boolean>>({});

  const isLoadingKey = useCallback((key: string) => !!loadingKeys[key], [loadingKeys]);

  const invalidateKey = useCallback((key: string) => {
    setCache((prev) => {
      const copy = { ...prev };
      delete copy[key];
      return copy;
    });
  }, []);

  const fetchData = useCallback(async (key: string, fetcher: () => Promise<any>, forceRefresh = false) => {
    if (cache[key] !== undefined && !forceRefresh) {
      return cache[key];
    }

    setLoadingKeys((prev) => ({ ...prev, [key]: true }));
    try {
      const result = await fetcher();
      setCache((prev) => ({ ...prev, [key]: result }));
      return result;
    } catch (err) {
      console.error(`Error loading query key: ${key}`, err);
      throw err;
    } finally {
      setLoadingKeys((prev) => ({ ...prev, [key]: false }));
    }
  }, [cache]);

  return (
    <QueryDataContext.Provider
      value={{
        cache,
        fetchData,
        isLoadingKey,
        invalidateKey,
      }}
    >
      {children}
    </QueryDataContext.Provider>
  );
}

export function useQueryData() {
  const context = useContext(QueryDataContext);
  if (!context) throw new Error('useQueryData must be used within QueryDataProvider');
  return context;
}

// Custom hook to use in components
export function useQuery<T>(key: string, fetcher: () => Promise<T>, options?: { enabled?: boolean }) {
  const { fetchData, isLoadingKey, cache } = useQueryData();
  const [data, setData] = useState<T | null>((cache[key] as T) || null);
  const [loading, setLoading] = useState(() => !cache[key] && (options?.enabled ?? true));
  const [error, setError] = useState<Error | null>(null);

  React.useEffect(() => {
    if (options?.enabled === false) return;

    let isMounted = true;
    setLoading(true);

    fetchData(key, fetcher)
      .then((res) => {
        if (isMounted) {
          setData(res);
          setError(null);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err);
        }
      })
      .finally(() => {
        if (isMounted) {
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [key, fetchData, options?.enabled]);

  return { data, loading, error };
}

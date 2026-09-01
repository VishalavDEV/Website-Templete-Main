// Deep clone object
export function deepClone<T>(obj: T): T {
  try {
    return JSON.parse(JSON.stringify(obj));
  } catch {
    return obj;
  }
}

// Query-string handling
export function parseQueryString(query: string): Record<string, string> {
  const params: Record<string, string> = {};
  const searchParams = new URLSearchParams(query);
  searchParams.forEach((value, key) => {
    params[key] = value;
  });
  return params;
}

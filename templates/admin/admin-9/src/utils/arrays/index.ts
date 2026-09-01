// Chunk array into pieces
export function chunk<T>(arr: T[], size: number): T[][] {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );
}

// Unique items in array
export function unique<T>(arr: T[]): T[] {
  return Array.from(new Set(arr));
}

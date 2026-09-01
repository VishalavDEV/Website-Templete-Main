// Capitalize string
export function capitalize(str: string): string {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Truncate string
export function truncate(str: string, length = 30, suffix = '...'): string {
  if (str.length <= length) return str;
  return str.substring(0, length) + suffix;
}

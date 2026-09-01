// Currency formatting
export function formatCurrency(value: number, currency = 'USD', locale = 'en-US'): string {
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(value);
}

// Date formatting
export function formatDate(date: Date | string | number, locale = 'en-US'): string {
  const d = new Date(date);
  return d.toLocaleDateString(locale, { year: 'numeric', month: 'short', day: 'numeric' });
}

// Number formatting
export function formatNumber(value: number, locale = 'en-US'): string {
  return new Intl.NumberFormat(locale).format(value);
}

// File-size formatting
export function formatBytes(bytes: number, decimals = 2): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

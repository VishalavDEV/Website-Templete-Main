export function getAssetUrl(path: string): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const pathname = window.location.pathname;
  const match = pathname.match(/^(\/templates\/[^\/]+\/[^\/]+)/);
  const base = match ? match[1] : '';
  if (base && path.startsWith(base)) {
    return path;
  }
  const cleanPath = path.replace(/^(\.?\/)+/, '');
  return `${base}/${cleanPath}`;
}

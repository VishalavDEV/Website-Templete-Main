export function getAssetUrl(path: string | undefined | null): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:') || path.startsWith('blob:')) {
    return path;
  }
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const p = window.location.pathname;
  const match = p.match(/^(\/templates\/[^\/]+\/[^\/]+)/);
  const base = match ? match[1] : '';
  return `${base}/${cleanPath}`;
}

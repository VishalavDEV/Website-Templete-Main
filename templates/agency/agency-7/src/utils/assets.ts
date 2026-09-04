export function getAssetUrl(path: string | undefined | null): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:') || path.startsWith('blob:')) {
    return path;
  }
  let cleanPath = path;
  if (cleanPath.startsWith('/src/assets/')) {
    cleanPath = cleanPath.replace('/src/assets/', '');
  } else if (cleanPath.startsWith('src/assets/')) {
    cleanPath = cleanPath.replace('src/assets/', '');
  }
  if (cleanPath.startsWith('/')) {
    cleanPath = cleanPath.slice(1);
  }
  const p = window.location.pathname;
  const match = p.match(/^(\/templates\/[^\/]+\/[^\/]+)/);
  const base = match ? match[1] : '';
  return `${base}/${cleanPath}`;
}

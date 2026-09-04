/**
 * Dynamically resolves an asset path relative to the template base URL.
 * Works seamlessly whether hosted on localhost, subpaths, or nested router routes.
 */
export function getAssetUrl(path: string): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const cleanPath = path.replace(/^(\.?\/)+/, '');
  const pathname = window.location.pathname;
  const match = pathname.match(/^(\/templates\/[^\/]+\/[^\/]+)/);
  const base = match ? match[1] : '';
  return `${base}/${cleanPath}`;
}

export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  XXL: 1536
} as const;

export const MEDIA_QUERIES = {
  MOBILE: '(max-width: 639px)',
  TABLET: '(min-width: 640px) and (max-width: 1023px)',
  DESKTOP: '(min-width: 1024px)'
} as const;

export const ENVIRONMENT_CONFIG = {
  env: 'development' as 'development' | 'production' | 'staging',
  isMockMode: true,
  enableLogs: true,
  apiTimeout: 5000
} as const;

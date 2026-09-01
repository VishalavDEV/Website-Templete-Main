export const TOAST_MESSAGES = {
  SYNC_SUCCESS: 'Database caches synchronized successfully!',
  SYNC_FAILED: 'Database synchronization failure.',
  MFA_VERIFIED: 'MFA credentials verified successfully.',
  SESSION_LOCKED: 'Session credentials locked.',
  PREFERENCES_SAVED: 'Layout preferences saved.'
} as const;

export const VALIDATION_MESSAGES = {
  EMAIL_INVALID: 'Provide a valid corporate email address.',
  PASSWORD_WEAK: 'Password must be min 8 chars containing letters and digits.',
  TERMS_REQUIRED: 'Acknowledge terms and policies to continue.'
} as const;

export const PAYMENT_STATUS = {
  PAID: 'Paid',
  PENDING: 'Pending',
  OVERDUE: 'Overdue'
} as const;

export const USER_STATUS = {
  ACTIVE: 'active',
  SUSPENDED: 'suspended'
} as const;

export const BUILD_STATUS = {
  SUCCESS: 'Success',
  FAILED: 'Failed',
  PENDING: 'Pending'
} as const;

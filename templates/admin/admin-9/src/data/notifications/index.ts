export interface NotificationAlert {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  category: 'system' | 'user' | 'alert' | 'message';
}

export const mockNotifications: NotificationAlert[] = [
  { id: 'n1', title: 'SSL Certificates Warning', message: 'Staging keys will expire soon.', time: '12 mins ago', read: false, category: 'alert' },
  { id: 'n2', title: 'Invoice INV-002 Generated', message: 'Wayne Enterprises invoice is Overdue.', time: '1 hour ago', read: false, category: 'system' },
  { id: 'n3', title: 'Backup system credentials synced', message: 'All database cache archives rotated.', time: '1 day ago', read: true, category: 'system' }
];

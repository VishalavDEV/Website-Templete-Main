export interface ServiceNotification {
  id: string;
  title: string;
  text: string;
  type: 'info' | 'success' | 'warn' | 'error';
}

export const notificationService = {
  dispatch(notification: ServiceNotification) {
    console.log(`[NotificationService] DISPATCH ${notification.type.toUpperCase()}: ${notification.title} - ${notification.text}`);
  },
  
  toast(title: string, type: 'info' | 'success' | 'warn' | 'error' = 'info') {
    this.dispatch({
      id: Math.random().toString(),
      title,
      text: '',
      type
    });
  }
};

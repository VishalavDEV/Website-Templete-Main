import { useAuth } from '../app/providers/AuthProvider';

export function usePermissions() {
  const { user } = useAuth();

  const hasPermission = (permission: string) => {
    if (!user) return false;
    if (user.role === 'Administrator') return true;
    
    // Staged mockup permission flags mapping
    if (permission === 'syncDB') return user.role === 'Staging Manager';
    if (permission === 'writeStaging') return user.role === 'Staging Manager';
    if (permission === 'readBackups') return ['Staging Manager', 'Auditor'].includes(user.role);
    
    return false;
  };

  return { hasPermission };
}

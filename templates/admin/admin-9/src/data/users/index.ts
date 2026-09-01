export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'suspended';
  clearance: string;
  mfa: boolean;
}

export const mockUsers: UserProfile[] = [
  { id: 'u1', name: 'Diana Prince', email: 'diana@corp.com', role: 'Administrator', status: 'active', clearance: 'Class-3', mfa: true },
  { id: 'u2', name: 'Ethan Hunt', email: 'ethan@corp.com', role: 'Staging Manager', status: 'active', clearance: 'Class-2', mfa: true },
  { id: 'u3', name: 'Fiona Gallagher', email: 'fiona@corp.com', role: 'Auditor', status: 'suspended', clearance: 'Class-1', mfa: false }
];

export const mockRoles = ['Administrator', 'Staging Manager', 'Auditor', 'Developer Evangelist'];
export const mockPermissionsMatrix = {
  admin: { readBackups: true, writeStaging: true, revokeKeys: true, syncDB: true },
  staging: { readBackups: true, writeStaging: true, revokeKeys: false, syncDB: true },
  viewer: { readBackups: true, writeStaging: false, revokeKeys: false, syncDB: false }
};

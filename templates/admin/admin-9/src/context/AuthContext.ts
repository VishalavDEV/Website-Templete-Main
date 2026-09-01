import { createContext } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, role?: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

import React, { createContext, useContext, useState } from 'react';

type User = {
  name: string;
  email: string;
  role: string;
  avatar?: string;
} | null;

type AuthContextType = {
  user: User;
  login: (email: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>({
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    role: 'Administrator',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
  });

  const login = (email: string) => {
    setUser({
      name: 'Jane Doe',
      email: email,
      role: 'Administrator',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}

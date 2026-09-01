import React, { createContext, useContext, useState, useEffect } from 'react';
import { authService } from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentUser = authService.getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
    } else {
      // Default demo user so dashboard is immediately usable
      const defaultUser = {
        id: 1,
        name: 'Admin User',
        email: 'admin@neura.tech',
        role: 'ADMIN',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
        phone: '+1 (555) 019-2834',
        department: 'Executive Engineering',
        bio: 'Super Admin & Lead System Architect at NEURA Cybernetics.'
      };
      setUser(defaultUser);
      localStorage.setItem('neura_user', JSON.stringify(defaultUser));
      localStorage.setItem('neura_jwt_token', 'demo_jwt_token_neura_2026');
    }
    setLoading(false);
  }, []);

  const login = async (credentials) => {
    setLoading(true);
    try {
      const data = await authService.login(credentials);
      setUser(data.user);
      return data;
    } finally {
      setLoading(false);
    }
  };

  const updateUser = (updatedFields) => {
    setUser((prevUser) => {
      const newUser = { ...prevUser, ...updatedFields };
      localStorage.setItem('neura_user', JSON.stringify(newUser));
      return newUser;
    });
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, updateUser, login, logout, isAuthenticated: !!user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

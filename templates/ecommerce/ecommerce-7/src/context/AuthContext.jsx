import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      if (token) {
        try {
          const response = await api.get('/auth/profile');
          setUser(response.data);
        } catch (error) {
          console.error('Failed to load user profile', error);
          logout();
        }
      }
      setLoading(false);
    };

    loadUser();
  }, [token]);

  const login = async (email, password) => {
    const response = await api.post('/auth/login', { email, password });
    const { token: jwtToken, name, role } = response.data;
    
    localStorage.setItem('token', jwtToken);
    setToken(jwtToken);
    setUser({ name, email, role });
    return response.data;
  };

  const register = async (name, email, password, role = 'CUSTOMER') => {
    const response = await api.post('/auth/register', { name, email, password, role });
    return response.data;
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  const updateProfile = async (name, address) => {
    const response = await api.put('/auth/profile', { name, address });
    setUser(response.data);
    return response.data;
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, register, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

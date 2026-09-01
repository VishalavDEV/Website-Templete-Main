import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, Patient, Doctor, UserRole } from '../types';
import { ApiService } from '../services/api';
import { useToast } from './ToastContext';

interface AuthContextType {
  user: User | null;
  patient: Patient | null;
  doctor: Doctor | null;
  token: string | null;
  isLoading: boolean;
  login: (email: string, password?: string) => Promise<void>;
  registerPatient: (data: {
    name: string;
    email: string;
    phone: string;
    dob: string;
    gender: 'Male' | 'Female' | 'Other';
    address: string;
    blood_group?: string;
    emergency_contact?: string;
    allergies?: string;
  }) => Promise<void>;
  logout: () => Promise<void>;
  switchDemoRole: (role: UserRole) => Promise<void>;
  updateUserContext: (user: User, patient?: Patient, doctor?: Doctor) => void;
  hasRole: (roles: UserRole | UserRole[]) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [patient, setPatient] = useState<Patient | null>(null);
  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { success, error } = useToast();

  useEffect(() => {
    const initAuth = async () => {
      try {
        const savedUser = await ApiService.getCurrentUser();
        const savedToken = localStorage.getItem('medipulse_auth_token');
        if (savedUser && savedToken) {
          setUser(savedUser);
          setToken(savedToken);
          if (savedUser.role === 'patient') {
            const patients = await ApiService.getPatients();
            const p = patients.find(pat => pat.user_id === savedUser.user_id);
            if (p) setPatient(p);
          } else if (savedUser.role === 'doctor') {
            const doctors = await ApiService.getDoctors();
            const d = doctors.find(doc => doc.user_id === savedUser.user_id);
            if (d) setDoctor(d);
          }
        }
      } catch (err) {
        console.error('Failed to initialize auth', err);
      } finally {
        setIsLoading(false);
      }
    };
    initAuth();
  }, []);

  const login = async (email: string, password?: string) => {
    try {
      setIsLoading(true);
      const res = await ApiService.login(email, password);
      setUser(res.user);
      setPatient(res.patient || null);
      setDoctor(res.doctor || null);
      setToken(res.token);
      success(`Welcome back, ${res.user.name}!`, `Logged in as ${res.user.role.toUpperCase()}`);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Login failed';
      error('Authentication Error', msg);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const registerPatient = async (data: Parameters<typeof ApiService.registerPatient>[0]) => {
    try {
      setIsLoading(true);
      const res = await ApiService.registerPatient(data);
      setUser(res.user);
      setPatient(res.patient);
      setDoctor(null);
      setToken(res.token);
      success('Registration Successful!', 'Welcome to Qure Nexa Healthcare Portal.');
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Registration failed';
      error('Registration Error', msg);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    await ApiService.logout();
    setUser(null);
    setPatient(null);
    setDoctor(null);
    setToken(null);
    success('Logged Out', 'You have been safely signed out.');
  };

  const switchDemoRole = async (role: UserRole) => {
    const demoEmails: Record<UserRole, string> = {
      admin: 'admin@medipulse.org',
      doctor: 'dr.chen@medipulse.org',
      patient: 'sarah.patient@example.com'
    };
    await login(demoEmails[role]);
  };

  const updateUserContext = (updatedUser: User, updatedPatient?: Patient, updatedDoctor?: Doctor) => {
    setUser(updatedUser);
    if (updatedPatient !== undefined) setPatient(updatedPatient);
    if (updatedDoctor !== undefined) setDoctor(updatedDoctor);
  };

  const hasRole = (roles: UserRole | UserRole[]) => {
    if (!user) return false;
    if (Array.isArray(roles)) {
      return roles.includes(user.role);
    }
    return user.role === roles;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        patient,
        doctor,
        token,
        isLoading,
        login,
        registerPatient,
        logout,
        switchDemoRole,
        updateUserContext,
        hasRole
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

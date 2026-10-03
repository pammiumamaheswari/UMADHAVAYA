import React, { createContext, useContext, useState, useEffect } from 'react';
import { apiClient } from '../api/client';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  phone?: string;
  avatarUrl?: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (payload: { email: string; password: string; firstName: string; lastName: string; phone?: string }) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('umadhvaya_access_token'));
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMe = async () => {
      if (!token) {
        setIsLoading(false);
        return;
      }
      try {
        const res = await apiClient.get('/auth/me');
        setUser(res.data.data);
      } catch {
        localStorage.removeItem('umadhvaya_access_token');
        setToken(null);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMe();
  }, [token]);

  const login = async (email: string, password: string) => {
    const res = await apiClient.post('/auth/login', { email, password });
    const { user: loggedInUser, accessToken } = res.data.data;
    localStorage.setItem('umadhvaya_access_token', accessToken);
    setToken(accessToken);
    setUser(loggedInUser);
  };

  const register = async (payload: { email: string; password: string; firstName: string; lastName: string; phone?: string }) => {
    const res = await apiClient.post('/auth/register', payload);
    const { user: registeredUser, accessToken } = res.data.data;
    localStorage.setItem('umadhvaya_access_token', accessToken);
    setToken(accessToken);
    setUser(registeredUser);
  };

  const logout = () => {
    localStorage.removeItem('umadhvaya_access_token');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};

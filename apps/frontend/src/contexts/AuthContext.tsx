import { createContext, useContext, useState } from 'react';
import type { User } from '../types/auth';
import { loginWithEmail } from '../services/auth';

interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  registerWithEmail: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading] = useState(false);

  async function signInWithEmail(email: string, password: string) {
    await loginWithEmail(email, password);
    setCurrentUser({
      email,
      emailVerified: true,
      role: 'member'
    });
  }

  async function registerWithEmail(email: string, password: string) {
    if (password.length < 8) {
      throw new Error('Password must be at least 8 characters long');
    }

    if (!email.includes('@')) {
      throw new Error('Invalid email format');
    }

    setCurrentUser({
      email,
      emailVerified: false,
      role: 'member'
    });
  }

  async function logout() {
    setCurrentUser(null);
  }

  const value = {
    currentUser,
    loading,
    signInWithEmail,
    registerWithEmail,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
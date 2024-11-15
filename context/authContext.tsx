import React, { createContext, useContext, useState, useCallback } from 'react';
import { Alert } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';

export type AuthContextType = {
  isAuthorized: boolean;
  authenticate: () => Promise<boolean>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  const authenticate = useCallback(async (): Promise<boolean> => {
    try {
      const hasHardware = await LocalAuthentication.hasHardwareAsync();
      const isEnrolled = await LocalAuthentication.isEnrolledAsync();

      if (!hasHardware || !isEnrolled) {
        Alert.alert('Biometric authentication not available', 'Please set up biometrics on your device.');

        return false;
      }

      const result = await LocalAuthentication.authenticateAsync();

      if (result.success) {
        setIsAuthorized(true);

        return true;
      } else {
        Alert.alert('Authentication Failed', 'Please try again.');

        return false;
      }
    } catch (error) {
      console.error('Authentication error:', error);

      Alert.alert('Authentication Error', 'An unexpected error occurred.');

      return false;
    }
  }, []);

  const logout = useCallback(() => {
    setIsAuthorized(false);
  }, []);

  return <AuthContext.Provider value={{ isAuthorized, authenticate, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};

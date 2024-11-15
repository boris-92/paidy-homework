import { renderHook, act } from '@testing-library/react';
import * as LocalAuthentication from 'expo-local-authentication';

import { AuthProvider, useAuth } from '../authContext';

jest.mock('expo-local-authentication');

describe('useAuth', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should authenticate successfully when biometrics are available and enrolled', async () => {
    (LocalAuthentication.hasHardwareAsync as jest.Mock).mockResolvedValue(true);
    (LocalAuthentication.isEnrolledAsync as jest.Mock).mockResolvedValue(true);
    (LocalAuthentication.authenticateAsync as jest.Mock).mockResolvedValue({ success: true });

    const wrapper = ({ children }: { children: React.ReactNode }) => <AuthProvider>{children}</AuthProvider>;

    const { result } = renderHook(() => useAuth(), { wrapper });

    let success;

    await act(async () => {
      success = await result.current.authenticate();
    });

    expect(success).toBe(true);
    expect(result.current.isAuthorized).toBe(true);
  });

  it('should fail authentication when biometrics are rejected', async () => {
    (LocalAuthentication.hasHardwareAsync as jest.Mock).mockResolvedValue(true);
    (LocalAuthentication.isEnrolledAsync as jest.Mock).mockResolvedValue(true);
    (LocalAuthentication.authenticateAsync as jest.Mock).mockResolvedValue({ success: false });

    const wrapper = ({ children }: { children: React.ReactNode }) => <AuthProvider>{children}</AuthProvider>;

    const { result } = renderHook(() => useAuth(), { wrapper });

    let success;

    await act(async () => {
      success = await result.current.authenticate();
    });

    expect(success).toBe(false);
    expect(result.current.isAuthorized).toBe(false);
  });

  it('should fail authentication when no biometric hardware is available', async () => {
    (LocalAuthentication.hasHardwareAsync as jest.Mock).mockResolvedValue(false);

    const wrapper = ({ children }: { children: React.ReactNode }) => <AuthProvider>{children}</AuthProvider>;

    const { result } = renderHook(() => useAuth(), { wrapper });

    let success;

    await act(async () => {
      success = await result.current.authenticate();
    });

    expect(success).toBe(false);
    expect(result.current.isAuthorized).toBe(false);
  });

  it('should logout and reset isAuthorized to false', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => <AuthProvider>{children}</AuthProvider>;

    const { result } = renderHook(() => useAuth(), { wrapper });

    act(() => {
      result.current.logout();
    });

    expect(result.current.isAuthorized).toBe(false);
  });
});

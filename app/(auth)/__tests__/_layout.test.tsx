import React from 'react';
import { render } from '@testing-library/react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Redirect, Stack } from 'expo-router';

import { useAuth } from '@/context/authContext';

import AuthLayout from '../_layout';

jest.mock('expo-router', () => ({
  Redirect: jest.fn(() => null),
  Stack: jest.fn(() => null),
  StackScreen: jest.fn(() => null),
}));

jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets: jest.fn(),
}));

jest.mock('@/context/authContext', () => ({
  useAuth: jest.fn(),
}));

describe('AuthLayout', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    (useSafeAreaInsets as jest.Mock).mockReturnValue({ bottom: 10 });
  });

  it('should redirect to login if not authorized', () => {
    (useAuth as jest.Mock).mockReturnValue({ isAuthorized: false });

    render(<AuthLayout />);

    expect(Redirect).toHaveBeenCalledWith({ href: '/login' }, {});
  });

  it('should render the stack if authorized', () => {
    (useAuth as jest.Mock).mockReturnValue({ isAuthorized: true });

    render(<AuthLayout />);

    expect(jest.mocked(Stack)).toHaveBeenCalledTimes(1);
  });
});

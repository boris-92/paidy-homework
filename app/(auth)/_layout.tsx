import React, { FC, useMemo } from 'react';
import { Redirect, Stack } from 'expo-router';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useAuth } from '@/context/authContext';

import { IS_IOS } from '@/utils/device';

const AuthLayout: FC = () => {
  const { bottom } = useSafeAreaInsets();
  const { isAuthorized } = useAuth();

  const containerStyle = useMemo(() => ({ flex: 1, paddingBottom: bottom }), [bottom]);

  if (!isAuthorized) {
    return <Redirect href="/login" />;
  }

  return (
    <View style={containerStyle}>
      <Stack>
        <Stack.Screen
          name="home"
          options={{
            title: 'ToDo:',
            headerTransparent: IS_IOS,
            headerBlurEffect: 'regular',
          }}
        />
      </Stack>
    </View>
  );
};

export default AuthLayout;

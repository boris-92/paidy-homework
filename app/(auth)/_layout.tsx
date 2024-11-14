import React, { FC, useMemo } from 'react';
import { Redirect, Stack } from 'expo-router';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const AuthLayout: FC = () => {
  const { bottom } = useSafeAreaInsets();

  const isAuthorized = true;

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
            headerTransparent: true,
            headerBlurEffect: 'regular',
          }}
        />
      </Stack>
    </View>
  );
};

export default AuthLayout;

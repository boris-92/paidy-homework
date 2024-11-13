import React, { FC } from 'react';
import { Redirect, Stack } from 'expo-router';

const AuthLayout: FC = () => {
  const isAuthorized = true;
  if (!isAuthorized) {
    return <Redirect href="/login" />;
  }

  return (
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
  );
};

export default AuthLayout;

import React, { FC } from 'react';
import { Redirect, Stack } from 'expo-router';

const AuthLayout: FC = () => {
  const isAuthorized = true;
  if (!isAuthorized) {
    return <Redirect href="/login" />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" />
    </Stack>
  );
};

export default AuthLayout;

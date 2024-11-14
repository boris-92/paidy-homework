import { View, Text, Button } from 'react-native';
import React, { FC } from 'react';
import * as LocalAuthentication from 'expo-local-authentication';
import { router } from 'expo-router';

const Login: FC = () => {
  const handlePress = async () => {
    const res = await LocalAuthentication.authenticateAsync();

    if (res.success) {
      router.replace('/home');
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login</Text>
      <Button title="Login" onPress={handlePress} />
    </View>
  );
};

export default Login;

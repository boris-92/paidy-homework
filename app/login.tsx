import React, { FC } from 'react';
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

import { useAuth } from '@/context/authContext';

const Login: FC = () => {
  const router = useRouter();
  const { authenticate } = useAuth();

  const handlePress = async () => {
    const isSuccess = await authenticate();

    if (isSuccess) {
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

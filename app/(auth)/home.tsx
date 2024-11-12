import { Link } from 'expo-router';
import React, { FC } from 'react';
import { View, Text, Button } from 'react-native';

const Home: FC = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home</Text>
      <Link href={'/login'} replace asChild>
        <Button title="Logout" />
      </Link>
    </View>
  );
};

export default Home;

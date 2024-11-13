import React, { FC } from 'react';
import { View } from 'react-native';

import Composer from '@/components/Composer/Composer';

const Home: FC = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Composer />
    </View>
  );
};

export default Home;

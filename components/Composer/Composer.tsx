import React from 'react';
import { View } from 'react-native';

import TextInput from '../ui-kit/TextInput/TextInput';
import IconButton from '../ui-kit/IconButton/IconButton';

import styles from './styles';

const Composer = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} />
      <IconButton
        name={'plus'} // or update
      />
    </View>
  );
};

export default Composer;

import React, { FC } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

type EmptyProps = {
  text?: string;
};

const Empty: FC<EmptyProps> = ({ text = 'No items yet' }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Empty;

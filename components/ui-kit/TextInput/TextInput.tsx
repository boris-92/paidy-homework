import React, { FC } from 'react';
import { TextInput as RNTextInput, View, ViewProps } from 'react-native';

import styles from './styles';

export type TextInputProps = {
  style?: ViewProps['style'];
};

const TextInput: FC<TextInputProps> = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <RNTextInput style={styles.input} />
    </View>
  );
};

export default TextInput;

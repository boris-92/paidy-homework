import React, { FC } from 'react';
import { TextInput, TextInputProps, View, ViewProps } from 'react-native';

import styles from './styles';

export type CustomTextInputProps = TextInputProps & {
  containerStyle?: ViewProps['style'];
};

const CustomTextInput: FC<CustomTextInputProps> = ({ containerStyle, ...rest }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput style={styles.input} {...rest} />
    </View>
  );
};

export default CustomTextInput;

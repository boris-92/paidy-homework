import React, { forwardRef } from 'react';
import { TextInput, TextInputProps, View, ViewProps } from 'react-native';

import styles from './styles';

export type CustomTextInputProps = TextInputProps & {
  containerStyle?: ViewProps['style'];
};

const CustomTextInput = forwardRef<TextInput, CustomTextInputProps>(({ containerStyle, ...rest }, ref) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput ref={ref} style={styles.input} {...rest} />
    </View>
  );
});

CustomTextInput.displayName = 'CustomTextInput';

export default CustomTextInput;

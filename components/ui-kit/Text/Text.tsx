import React, { FC } from 'react';
import { Text as RNText, TextProps } from 'react-native';

export type CustomTextProps = TextProps;

const Text: FC<CustomTextProps> = (props) => {
  return <RNText {...props} />;
};

export default Text;

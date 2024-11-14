import React, { FC } from 'react';
import { Text, TextProps } from 'react-native';

export type CustomTextProps = TextProps;

const CustomText: FC<CustomTextProps> = (props) => {
  return <Text {...props} />;
};

export default CustomText;

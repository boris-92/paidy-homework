import React, { FC } from 'react';

import IconButton from '../IconButton/IconButton';

import { COLORS } from '@/constants/Colors';

type CheckboxProps = {
  value: boolean;
  onPress?: () => void;
};

const Checkbox: FC<CheckboxProps> = ({ value, onPress }) => {
  return (
    <IconButton
      name={value ? 'check' : 'minus'}
      backgroundColor={value ? COLORS.SUCCESS : COLORS.DISABLED}
      onPress={onPress}
      testID={'checkbox'}
    />
  );
};

export default Checkbox;

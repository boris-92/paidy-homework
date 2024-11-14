import React, { ComponentProps, FC } from 'react';
import { SimpleLineIcons } from '@expo/vector-icons';

import { COLORS } from '@/constants/Colors';

import styles from './styles';

export enum IconButtonSize {
  S = 16,
  M = 24,
  L = 32,
}

export type CustomIconButtonProps = ComponentProps<typeof SimpleLineIcons.Button> & {
  size?: IconButtonSize;
};

const IconButton: FC<CustomIconButtonProps> = ({ size = IconButtonSize.M, disabled, ...rest }) => {
  return (
    <SimpleLineIcons.Button
      style={styles.container}
      iconStyle={styles.icon}
      backgroundColor={disabled ? COLORS.DISABLED : COLORS.PRIMARY}
      borderRadius={100}
      size={size}
      disabled={disabled}
      {...rest}
    />
  );
};

export default IconButton;

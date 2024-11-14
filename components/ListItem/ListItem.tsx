import React, { FC, memo } from 'react';
import { View } from 'react-native';

import Checkbox from '../ui-kit/Checkbox/Checkbox';
import Text from '../ui-kit/Text/Text';
import IconButton from '../ui-kit/IconButton/IconButton';

import styles from './styles';

export type ListItemProps = {
  id: string;
  isChecked: boolean;
  title: string;
  onCheckboxPress: (id: string) => void;
  onPress: (id: string) => void;
  onDeletePress: (id: string) => void;
};

const ListItem: FC<ListItemProps> = ({ id, isChecked, title, onPress, onCheckboxPress, onDeletePress }) => {
  return (
    <View style={styles.container}>
      <Checkbox value={isChecked} onPress={() => onCheckboxPress(id)} />
      <Text style={styles.text} numberOfLines={1}>
        {title}
      </Text>
      <IconButton name={'close'} onPress={() => onDeletePress(id)} />
    </View>
  );
};

export default memo(ListItem);

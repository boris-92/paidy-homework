import React, { FC, memo } from 'react';
import { TouchableOpacity, View } from 'react-native';

import Checkbox from '../ui-kit/Checkbox/Checkbox';
import Text from '../ui-kit/Text/Text';
import IconButton from '../ui-kit/IconButton/IconButton';

import { Todo } from '@/hooks/useTodos';

import { COLORS } from '@/constants/Colors';

import styles from './styles';

export type ListItemProps = {
  id: string;
  isChecked: boolean;
  title: string;
  onCheckboxPress: (id: string) => void;
  onPress: (item: Todo) => void;
  onDeletePress: (id: string) => void;
};

const ListItem: FC<ListItemProps> = ({ id, isChecked, title, onPress, onCheckboxPress, onDeletePress }) => {
  const handlePress = () => {
    onPress({ id, title, isChecked });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <Checkbox value={isChecked} onPress={() => onCheckboxPress(id)} />
        <Text style={styles.text} numberOfLines={1}>
          {title}
        </Text>
        <IconButton name={'close'} backgroundColor={COLORS.ERROR} onPress={() => onDeletePress(id)} />
      </View>
    </TouchableOpacity>
  );
};

export default memo(ListItem);

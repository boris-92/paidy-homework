import React, { FC } from 'react';
import { View } from 'react-native';

import Checkbox from '../ui-kit/Checkbox/Checkbox';
import Text from '../ui-kit/Text/Text';
import IconButton from '../ui-kit/IconButton/IconButton';

import styles from './styles';

export type ListItemProps = {
  isChecked: boolean;
  title: string;
};

const ListItem: FC<ListItemProps> = ({ isChecked, title }) => {
  return (
    <View style={styles.container}>
      <Checkbox />
      <Text style={styles.text} numberOfLines={1}>
        {title}
      </Text>
      <IconButton name={'close'} onPress={() => {}} />
    </View>
  );
};

export default ListItem;

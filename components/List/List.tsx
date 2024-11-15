import React, { useMemo } from 'react';
import { useHeaderHeight } from '@react-navigation/elements';
import Animated, { FlatListPropsWithLayout } from 'react-native-reanimated';

import Empty from './Empty/Empty';

import { IS_IOS } from '@/utils/device';

import styles from './styles';

export type ListProps<T> = FlatListPropsWithLayout<T>;

const List = <T,>(props: ListProps<T>) => {
  const headerHeight = useHeaderHeight();

  const contentContainerStyle = useMemo(() => ({ paddingTop: IS_IOS ? headerHeight : 0, flexGrow: 1 }), [headerHeight]);

  return (
    <Animated.FlatList
      contentContainerStyle={contentContainerStyle}
      ListEmptyComponent={Empty}
      style={styles.list}
      {...props}
    />
  );
};

export default List;

import React, { useMemo } from 'react';
import { useHeaderHeight } from '@react-navigation/elements';
import Animated, { FlatListPropsWithLayout } from 'react-native-reanimated';

import Empty from './Empty/Empty';

import styles from './styles';

export type ListProps<T> = FlatListPropsWithLayout<T>;

const List = <T,>(props: ListProps<T>) => {
  const headerHeight = useHeaderHeight();

  const contentContainerStyle = useMemo(() => ({ paddingTop: headerHeight, flexGrow: 1 }), [headerHeight]);

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

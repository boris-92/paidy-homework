import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { useHeaderHeight } from '@react-navigation/elements';

import Composer from '@/components/Composer/Composer';
import ListItem from '@/components/ListItem/ListItem';

const DATA = new Array(50).fill('Test').map((i) => ({ isChecked: false, title: i }));

const styles = StyleSheet.create({
  list: {
    width: '100%',
  },
});

const Home: FC = () => {
  const headerHeight = useHeaderHeight();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Animated.FlatList
        data={DATA}
        renderItem={({ item }) => <ListItem isChecked={item.isChecked} title={item.title} />}
        contentContainerStyle={{ paddingTop: headerHeight }}
        style={styles.list}
      />
      <Composer />
    </View>
  );
};

export default Home;

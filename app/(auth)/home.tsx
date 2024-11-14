import React, { FC } from 'react';
import Composer, { ComposerProps } from '@/components/Composer/Composer';
import ListItem from '@/components/ListItem/ListItem';
import List, { ListProps } from '@/components/List/List';

import useTodos, { Todo } from '@/hooks/useTodos';

const keyExtractor: ListProps<Todo>['keyExtractor'] = (item) => item.id;

const Home: FC = () => {
  const { todos, addItem, toggleItem, removeItem } = useTodos();

  const handleAddPress: ComposerProps['onAddPress'] = (title) => {
    addItem(title);
  };

  const handleUpdatePress = () => {};

  const handleListItemPress = () => {};

  return (
    <>
      <List
        data={todos}
        renderItem={({ item }) => (
          <ListItem
            id={item.id}
            isChecked={item.isChecked}
            title={item.title}
            onPress={handleListItemPress}
            onCheckboxPress={toggleItem}
            onDeletePress={removeItem}
          />
        )}
        keyExtractor={keyExtractor}
      />
      <Composer onAddPress={handleAddPress} onUpdatePress={handleUpdatePress} />
    </>
  );
};

export default Home;

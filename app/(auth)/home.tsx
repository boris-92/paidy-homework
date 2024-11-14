import React, { FC, useCallback, useState } from 'react';

import Composer, { ComposerProps } from '@/components/Composer/Composer';
import ListItem, { ListItemProps } from '@/components/ListItem/ListItem';
import List, { ListProps } from '@/components/List/List';

import useTodos, { Todo } from '@/hooks/useTodos';

const keyExtractor: ListProps<Todo>['keyExtractor'] = (item) => item.id;

const Home: FC = () => {
  const { todos, addItem, toggleItem, updateItem, removeItem } = useTodos();
  const [editingItem, setEditingItem] = useState<Todo | undefined>();

  const handleListItemPress: ListItemProps['onPress'] = useCallback((item) => {
    setEditingItem(item);
  }, []);

  const handleAddPress: ComposerProps['onAddPress'] = (title) => {
    if (title) {
      addItem(title);
    }
  };

  const handleUpdatePress: ComposerProps['onUpdatePress'] = (id, title) => {
    if (id && title) {
      updateItem(id, title);

      setEditingItem(undefined);
    }
  };

  const handleDeletePress: ListItemProps['onDeletePress'] = useCallback(
    (id) => {
      removeItem(id);

      if (id === editingItem?.id) {
        setEditingItem(undefined);
      }
    },
    [removeItem, editingItem?.id],
  );

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
            onDeletePress={handleDeletePress}
          />
        )}
        keyExtractor={keyExtractor}
        keyboardDismissMode={'on-drag'}
      />
      <Composer editingItem={editingItem} onAddPress={handleAddPress} onUpdatePress={handleUpdatePress} />
    </>
  );
};

export default Home;

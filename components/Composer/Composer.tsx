import React, { FC, useEffect, useState } from 'react';
import { View } from 'react-native';

import TextInput, { CustomTextInputProps } from '../ui-kit/TextInput/TextInput';
import IconButton from '../ui-kit/IconButton/IconButton';

import { Todo } from '@/hooks/useTodos';

import styles from './styles';

export type ComposerProps = {
  editingItem?: Todo;
  onAddPress?: (text: string) => void;
  onUpdatePress?: (id: string, text: string) => void;
};

const Composer: FC<ComposerProps> = ({ editingItem, onAddPress, onUpdatePress }) => {
  const [inputText, setInputText] = useState<string>('');

  const isDisabled = !inputText;

  useEffect(() => {
    if (editingItem) {
      setInputText(editingItem.title);
    }
  }, [editingItem]);

  const handleChange: CustomTextInputProps['onChangeText'] = (text) => setInputText(text);

  const handleButtonPress = () => {
    if (editingItem) {
      onUpdatePress && onUpdatePress(editingItem.id, inputText);
    } else {
      onAddPress && onAddPress(inputText);
    }

    setInputText('');
  };

  return (
    <View style={styles.container}>
      <TextInput value={inputText} onChangeText={handleChange} containerStyle={styles.input} />
      <IconButton name={editingItem ? 'refresh' : 'plus'} onPress={handleButtonPress} disabled={isDisabled} />
    </View>
  );
};

export default Composer;

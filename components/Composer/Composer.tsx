import React, { FC, useEffect, useRef, useState } from 'react';
import { View, TextInput as RNTextInput } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';

import TextInput, { CustomTextInputProps } from '../ui-kit/TextInput/TextInput';
import IconButton from '../ui-kit/IconButton/IconButton';

import { Todo } from '@/hooks/useTodos';
import useGradualAnimation from '@/hooks/useGradualAnimation';

import styles from './styles';

export type ComposerProps = {
  editingItem?: Todo;
  onAddPress?: (text: string) => void;
  onUpdatePress?: (id: string, text: string) => void;
};

const Composer: FC<ComposerProps> = ({ editingItem, onAddPress, onUpdatePress }) => {
  const { height } = useGradualAnimation();

  const [inputText, setInputText] = useState<string>('');
  const inputRef = useRef<RNTextInput>(null);

  const keyboardOffsetViewStyles = useAnimatedStyle(() => {
    return {
      height: Math.abs(height.value),
    };
  }, []);

  const isDisabled = !inputText;

  useEffect(() => {
    if (editingItem) {
      setInputText(editingItem.title);

      inputRef?.current?.focus();
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
    <>
      <View style={styles.container}>
        <TextInput ref={inputRef} value={inputText} onChangeText={handleChange} containerStyle={styles.input} />
        <IconButton name={editingItem ? 'refresh' : 'plus'} onPress={handleButtonPress} disabled={isDisabled} />
      </View>
      <Animated.View style={keyboardOffsetViewStyles} />
    </>
  );
};

export default Composer;

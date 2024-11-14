import React, { FC, useState } from 'react';
import { View } from 'react-native';

import TextInput, { CustomTextInputProps } from '../ui-kit/TextInput/TextInput';
import IconButton from '../ui-kit/IconButton/IconButton';

import styles from './styles';

export type ComposerProps = {
  onAddPress?: (text: string) => void;
  onUpdatePress?: (id: string, text: string) => void;
};

const Composer: FC<ComposerProps> = ({ onAddPress, onUpdatePress }) => {
  const [inputText, setInputText] = useState<string>('');

  const handleChange: CustomTextInputProps['onChangeText'] = (text) => setInputText(text);

  const handleButtonPress = () => {
    onAddPress && onAddPress(inputText);
    setInputText('');
  };

  return (
    <View style={styles.container}>
      <TextInput value={inputText} onChangeText={handleChange} containerStyle={styles.input} />
      <IconButton
        name={'plus'} // or update
        onPress={handleButtonPress}
      />
    </View>
  );
};

export default Composer;

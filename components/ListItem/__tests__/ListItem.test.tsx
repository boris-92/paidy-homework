import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import ListItem from '../ListItem';

describe('<ListItem />', () => {
  const mockCheckboxPress = jest.fn();
  const mockDeletePress = jest.fn();
  const mockPress = jest.fn();

  it('should render title and checkbox correctly', () => {
    const { getByText, getByTestId } = render(
      <ListItem
        id="1"
        title="Test Todo"
        isChecked={false}
        onCheckboxPress={mockCheckboxPress}
        onPress={mockPress}
        onDeletePress={mockDeletePress}
      />,
    );

    expect(getByText('Test Todo')).toBeTruthy();
    expect(getByTestId('checkbox')).toBeTruthy();
  });

  it('should call onCheckboxPress when checkbox is pressed', () => {
    const { getByTestId } = render(
      <ListItem
        id="1"
        title="Test Todo"
        isChecked={false}
        onCheckboxPress={mockCheckboxPress}
        onPress={mockPress}
        onDeletePress={mockDeletePress}
      />,
    );

    fireEvent.press(getByTestId('checkbox'));
    expect(mockCheckboxPress).toHaveBeenCalledWith('1');
  });

  it('should call onDeletePress when delete button is pressed', () => {
    const { getByTestId } = render(
      <ListItem
        id="1"
        title="Test Todo"
        isChecked={false}
        onCheckboxPress={mockCheckboxPress}
        onPress={mockPress}
        onDeletePress={mockDeletePress}
      />,
    );

    fireEvent.press(getByTestId('delete-button'));
    expect(mockDeletePress).toHaveBeenCalledWith('1');
  });
});

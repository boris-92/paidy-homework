import React from 'react';
import { render } from '@testing-library/react-native';

import Composer from '../Composer';

describe('<Composer />', () => {
  it('should display editable item title', () => {
    const mockAddPress = jest.fn();
    const { getByTestId } = render(
      <Composer
        onAddPress={mockAddPress}
        onUpdatePress={jest.fn()}
        editingItem={{ id: '1', title: 'Editable Todo', isChecked: false }}
      />,
    );

    const input = getByTestId('composer-input-field');
    expect(input.props.value).toBe('Editable Todo');
  });
});

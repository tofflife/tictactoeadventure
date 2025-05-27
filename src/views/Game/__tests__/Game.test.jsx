import React from 'react';
import { render } from '@testing-library/react-native';
import Game from '../index';

describe('Game', () => {
  it('renders game text', () => {
    const { getByText } = render(<Game />);
    expect(getByText('Game')).toBeTruthy();
  });
});

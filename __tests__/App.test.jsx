import React from 'react';
import { BackHandler } from 'react-native';
import { render, screen, fireEvent } from '@testing-library/react-native';
import App from '../App';
import { buttonBaseStyle } from '../src/components/Button';

const mockExitButtonStyles = [
  buttonBaseStyle,
  { borderColor: '#FF4444' },
];

jest.mock('react-native', () => ({
  BackHandler: {
    exitApp: jest.fn(),
  },
  StyleSheet: {
    create: jest.fn((obj) => obj),
    flatten: jest.fn((style) => style),
  },
  Text: 'Text',
  TouchableOpacity: 'TouchableOpacity',
  View: 'View',
}));

describe('App', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders start and exit buttons', () => {
    render(<App />);
    const startButton = screen.getByText('Start');
    const exitButton = screen.getByText('Exit');
    expect(startButton).toBeTruthy();
    expect(exitButton).toBeTruthy();
  });

  it('has correct button styles', () => {
    const { getByTestId } = render(<App />);
    const startButton = getByTestId('start-button');
    const exitButton = getByTestId('exit-button');

    expect(startButton.props.style).toEqual(buttonBaseStyle);
    expect(exitButton.props.style).toEqual(mockExitButtonStyles);
  });

  it('calls exitApp when exit button is pressed', () => {
    const { getByTestId } = render(<App />);
    const exitButton = getByTestId('exit-button');
    fireEvent.press(exitButton);
    expect(BackHandler.exitApp).toHaveBeenCalledTimes(1);
  });

  it('has start button with empty handler', () => {
    const { getByTestId } = render(<App />);
    const startButton = getByTestId('start-button');
    fireEvent.press(startButton);
    expect(startButton).toBeTruthy();
  });
});

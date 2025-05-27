import React from 'react';
import { BackHandler } from 'react-native';
import { render, screen, fireEvent } from '@testing-library/react-native';
import App from '../App';

const mockStyle = {
  alignItems: 'center',
  backgroundColor: '#000000',
  borderColor: '#FFFFFF',
  borderWidth: 2,
  borderRadius: 25,
  minWidth: 200,
  paddingHorizontal: 40,
  paddingVertical: 15,
};

const mockExitButtonStyles = [
  mockStyle,
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

    expect(startButton.props.style).toEqual(mockStyle);
    expect(exitButton.props.style).toEqual(mockExitButtonStyles);
  });

  it('calls exitApp when exit button is pressed', () => {
    const { getByTestId } = render(<App />);
    const exitButton = getByTestId('exit-button');
    fireEvent.press(exitButton);
    expect(BackHandler.exitApp).toHaveBeenCalledTimes(1);
  });

  it('has handleStart function prepared', () => {
    const { getByTestId } = render(<App />);
    const startButton = getByTestId('start-button');
    fireEvent.press(startButton);
    // Currently, handleStart is just a placeholder
    // This test ensures it exists and can be called without errors
    expect(startButton).toBeTruthy();
  });
});

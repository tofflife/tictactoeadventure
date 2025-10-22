import React from 'react';
import { BackHandler } from 'react-native';
import { render, fireEvent } from '@testing-library/react-native';
import App, { HomeScreen } from '../App';
import { buttonBaseStyle } from '../src/components/Button';

const mockExitButtonStyles = [
  buttonBaseStyle,
  { borderColor: '#FF4444' },
];

const mockNavigate = jest.fn();
const mockNavigation = { navigate: mockNavigate };

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

jest.mock('@react-navigation/native', () => ({
  NavigationContainer: ({ children }) => children,
}));

jest.mock('@react-navigation/native-stack', () => ({
  createNativeStackNavigator: () => ({
    Navigator: ({ children }) => children,
    Screen: () => null,
  }),
}));

describe('HomeScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders "Hello world" text', () => {
    const { getByText } = render(<HomeScreen navigation={mockNavigation} />);
    const helloText = getByText('Hello world');
    expect(helloText).toBeTruthy();
  });

  it('renders start and exit buttons', () => {
    const { getByText } = render(<HomeScreen navigation={mockNavigation} />);
    const startButton = getByText('Start');
    const exitButton = getByText('Exit');
    expect(startButton).toBeTruthy();
    expect(exitButton).toBeTruthy();
  });

  it('has correct button styles', () => {
    const { getByTestId } = render(<HomeScreen navigation={mockNavigation} />);
    const startButton = getByTestId('start-button');
    const exitButton = getByTestId('exit-button');

    expect(startButton.props.style).toEqual(buttonBaseStyle);
    expect(exitButton.props.style).toEqual(mockExitButtonStyles);
  });

  it('calls exitApp when exit button is pressed', () => {
    const { getByTestId } = render(<HomeScreen navigation={mockNavigation} />);
    const exitButton = getByTestId('exit-button');
    fireEvent.press(exitButton);
    expect(BackHandler.exitApp).toHaveBeenCalledTimes(1);
  });

  it('navigates to Game screen when start button is pressed', () => {
    const { getByTestId } = render(<HomeScreen navigation={mockNavigation} />);
    const startButton = getByTestId('start-button');
    fireEvent.press(startButton);
    expect(mockNavigate).toHaveBeenCalledWith('Game');
  });
});

describe('App', () => {
  it('renders without crashing', () => {
    expect(() => render(<App />)).not.toThrow();
  });
});

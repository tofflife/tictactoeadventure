import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button, { buttonBaseStyle } from '../index';

describe('Button', () => {
  const defaultProps = {
    onPress: jest.fn(),
    testID: 'test-button',
    style: buttonBaseStyle,
    text: 'Test Button',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with default props', () => {
    const { getByText, getByTestId } = render(
      <Button
        onPress={defaultProps.onPress}
        testID={defaultProps.testID}
        style={defaultProps.style}
        text={defaultProps.text}
      />,
    );
    expect(getByText('Test Button')).toBeTruthy();
    expect(getByTestId('test-button')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const { getByTestId } = render(
      <Button
        onPress={defaultProps.onPress}
        testID={defaultProps.testID}
        style={defaultProps.style}
        text={defaultProps.text}
      />,
    );
    fireEvent.press(getByTestId('test-button'));
    expect(defaultProps.onPress).toHaveBeenCalledTimes(1);
  });

  it('applies custom styles', () => {
    const customStyle = {
      backgroundColor: 'red',
    };
    const { getByTestId } = render(
      <Button
        onPress={defaultProps.onPress}
        testID={defaultProps.testID}
        style={customStyle}
        text={defaultProps.text}
      />,
    );
    const buttonStyle = getByTestId('test-button').props.style;
    expect(buttonStyle.backgroundColor).toBe(customStyle.backgroundColor);
  });
});

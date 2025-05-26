import React from 'react';
import { render, screen, StyleSheet } from '@testing-library/react-native';
import App from '../App';

describe('App', () => {
  it('renders hello message', () => {
    render(<App />);
    const helloText = screen.getByText('Hello');
    expect(helloText).toBeTruthy();
  });

  it('has correct styles', () => {
    const { getByText } = render(<App />);
    const helloText = getByText('Hello');
    
    expect(helloText.props.style).toEqual({
      fontSize: 24,
      fontWeight: 'bold',
      color: StyleSheet.create({}).color || '#FFFFFF',
    });
  });
}); 
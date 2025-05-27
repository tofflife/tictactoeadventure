import React from 'react';
import {
  BackHandler,
  StyleSheet,
  View,
} from 'react-native';
import Button, { buttonBaseStyle } from './src/components/Button';

const colors = {
  background: '#000000',
  buttonDangerBorder: '#FF4444',
};

const styles = StyleSheet.create({
  button: buttonBaseStyle,
  container: {
    alignItems: 'center',
    backgroundColor: StyleSheet.create({}).backgroundColor || colors.background,
    flex: 1,
    gap: 20,
    justifyContent: 'center',
  },
  exitButton: {
    borderColor: colors.buttonDangerBorder,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        onPress={() => {}} // Will be implemented later
        testID="start-button"
        text="Start"
      />
      <Button
        style={[styles.button, styles.exitButton]}
        onPress={BackHandler.exitApp}
        testID="exit-button"
        text="Exit"
      />
    </View>
  );
}

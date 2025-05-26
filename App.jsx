import React from 'react';
import {
  BackHandler,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const colors = {
  background: '#000000',
  buttonPrimary: '#4CAF50',
  buttonDanger: '#f44336',
  text: '#FFFFFF',
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: colors.buttonPrimary,
    borderRadius: 25,
    minWidth: 200,
    paddingHorizontal: 40,
    paddingVertical: 15,
  },
  buttonText: {
    color: colors.text,
    fontSize: 24,
    fontWeight: 'bold',
  },
  container: {
    alignItems: 'center',
    backgroundColor: StyleSheet.create({}).backgroundColor || colors.background,
    flex: 1,
    gap: 20,
    justifyContent: 'center',
  },
  exitButton: {
    backgroundColor: colors.buttonDanger,
  },
});

export default function App() {
  const handleExit = () => {
    BackHandler.exitApp();
  };

  const handleStart = () => {
    // TODO: Implement game start logic
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={handleStart}
        testID="start-button"
      >
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.exitButton]}
        onPress={handleExit}
        testID="exit-button"
      >
        <Text style={styles.buttonText}>Exit</Text>
      </TouchableOpacity>
    </View>
  );
}

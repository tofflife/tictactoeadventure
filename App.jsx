import React from 'react';
import PropTypes from 'prop-types';
import {
  BackHandler,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const colors = {
  background: '#000000',
  buttonBackground: '#000000',
  buttonBorder: '#FFFFFF',
  buttonDangerBorder: '#FF4444',
  text: '#FFFFFF',
};

const buttonBaseStyle = {
  alignItems: 'center',
  backgroundColor: colors.buttonBackground,
  borderColor: colors.buttonBorder,
  borderWidth: 2,
  borderRadius: 25,
  minWidth: 200,
  paddingHorizontal: 40,
  paddingVertical: 15,
};

const styles = StyleSheet.create({
  button: buttonBaseStyle,
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
    borderColor: colors.buttonDangerBorder,
  },
});

function Button({
  onPress,
  testID,
  style,
  text,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      testID={testID}
      style={style}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  testID: PropTypes.string.isRequired,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]).isRequired,
  text: PropTypes.string.isRequired,
};

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

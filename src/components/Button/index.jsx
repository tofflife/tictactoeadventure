import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const colors = {
  buttonBackground: '#000000',
  buttonBorder: '#FFFFFF',
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
  buttonText: {
    color: colors.text,
    fontSize: 24,
    fontWeight: 'bold',
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

export default Button;
export { buttonBaseStyle };

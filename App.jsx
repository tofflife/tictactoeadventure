import React from 'react';
import PropTypes from 'prop-types';
import {
  BackHandler,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Button, { buttonBaseStyle } from './src/components/Button';
import Game from './src/views/Game';

const colors = {
  background: '#000000',
  buttonDangerBorder: '#FF4444',
  text: '#FFFFFF',
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
  helloText: {
    color: colors.text,
    fontSize: 24,
  },
});

export function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.helloText} testID="hello-world-text">Hello world</Text>
      <Button
        style={styles.button}
        onPress={() => navigation.navigate('Game')}
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

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Game" component={Game} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

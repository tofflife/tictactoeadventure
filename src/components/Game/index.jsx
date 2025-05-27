import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const colors = {
  background: '#000000',
  text: '#FFFFFF',
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: colors.text,
    fontSize: 24,
    fontWeight: 'bold',
  },
});

function Game() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Game</Text>
    </View>
  );
}

export default Game;

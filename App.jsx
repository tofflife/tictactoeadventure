import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: StyleSheet.create({}).backgroundColor || '#000000',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: StyleSheet.create({}).color || '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello world!</Text>
    </View>
  );
}

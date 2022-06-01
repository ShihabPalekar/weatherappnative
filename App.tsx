import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Info from './screens/Info';
import InputForm from './screens/InputForm';

export default function App() {
  const [country, setCountry] = useState("")
  return (
    <View style={styles.container}>
      <InputForm country={country} setCountry={setCountry} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F5F7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

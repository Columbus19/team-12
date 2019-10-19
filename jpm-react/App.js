import React from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';
import HomeScreen from './pages/home_screen.js'

export default function App() {
  return (
    <HomeScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

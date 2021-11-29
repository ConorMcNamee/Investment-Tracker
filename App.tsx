import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import styles from './styles/mainStyles';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome!</Text>
      <StatusBar style="auto" />
    </View>
  );
}



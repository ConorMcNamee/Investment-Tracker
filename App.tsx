import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import styles from './styles/mainStyles';

import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';

export default function App() {
  return (
    <View style={styles.container}>
      <Dashboard />
    </View>
  );
}



import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { TabActionType } from '@react-navigation/routers';

import Navigation from './components/navigation/Navigation';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212032',
    alignItems: 'center',
  },
});

const App = () => {
  return (
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
  );
}

export default App;




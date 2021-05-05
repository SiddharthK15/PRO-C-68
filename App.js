
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'
import Facebook from './screens/fb';
import Instagram from './screens/in';

export default function App() {
  return (
    <AppContainer/>
  );
}

var AppNavigator = createBottomTabNavigator({
  Facebook:{screen:Facebook},
  Instagram:{screen:Instagram}
})

const AppContainer = createAppContainer(AppNavigator)

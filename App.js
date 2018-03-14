import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginScreen from './Screen/LoginScreen'
import HomeScreen from './Screen/HomeScreen'
export default StackNavigator({
  Login: {
    screen: LoginScreen,
  },
  Home: {
    screen: HomeScreen,
  }
},
  {
    initialRouteName: 'Login',
  }
);
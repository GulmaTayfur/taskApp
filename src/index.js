import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Routes from './navigation/Routes';
import {NavigationContainer} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
export default function App() {
  return (
    <NavigationContainer>
      <Routes />
      <Toast />
    </NavigationContainer>
  );
}

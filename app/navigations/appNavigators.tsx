import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View} from 'react-native';
import AuthNavigator from './authNavigator';
import PrivateNavigator from './privateNavigator';

function AppNavigators() {
  const isAuthenticated = false;
  return <>{isAuthenticated ? <PrivateNavigator /> : <AuthNavigator />}</>;
}

export default AppNavigators;

// App.tsx
import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import Home from './screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './navigations/authNavigator';
function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}

export default App;

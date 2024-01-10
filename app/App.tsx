// App.tsx
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigators from './navigations/appNavigators';
function App() {
  return (
    <NavigationContainer>
      <AppNavigators />
    </NavigationContainer>
  );
}

export default App;

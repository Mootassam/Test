// App.tsx
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigators from './navigations/appNavigators';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './modules/store';
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <AppNavigators />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;

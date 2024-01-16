import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View} from 'react-native';
import AuthNavigator from './authNavigator';
import PrivateNavigator from './privateNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthToken from '../modules/auth/authToken';
import selector from '../modules/auth/authSelectors';
import {useSelector} from 'react-redux';

function AppNavigators() {
  const [value, setValue] = useState(false);
  const currentUser = useSelector(selector.selectCurrentUser);
  useEffect(() => {}, [value]);

  const renderItem = () => {
    if (currentUser === null) {
      return <AuthNavigator currentUser={currentUser} />;
    } else {
      return <PrivateNavigator currentUser={currentUser} />;
    }
  };

  return <>{renderItem()}</>;
}

export default AppNavigators;

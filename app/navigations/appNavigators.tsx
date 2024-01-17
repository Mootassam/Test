import React, {useEffect, useState} from 'react';
import AuthNavigator from './authNavigator';
import PrivateNavigator from './privateNavigator';
import selector from '../modules/auth/authSelectors';
import {useSelector} from 'react-redux';

function AppNavigators() {
  const currentUser = useSelector(selector.selectCurrentUser);
  useEffect(() => {}, [currentUser]);

  const renderItem = () => {
    if (currentUser === null || currentUser === undefined) {
      return <AuthNavigator />;
    } else {
      return <PrivateNavigator currentUser={currentUser} />;
    }
  };

  return <>{renderItem()}</>;
}

export default AppNavigators;

import React, {useEffect, useState, useMemo} from 'react';
import AuthNavigator from './authNavigator';
import PrivateNavigator from './privateNavigator';
import selector from '../modules/auth/authSelectors';
import {useSelector} from 'react-redux';
import AuthToken from '../modules/auth/authToken';

function AppNavigators() {
  const currentUser = useSelector(selector.selectCurrentUser);
  const [token, setToken] = useState<any>();
  const loadToken = async () => {
    try {
      const data: string | null = await AuthToken.get();
      setToken(data);
    } catch (error) {
      console.error('Error loading token:', error);
    }
  };



  useEffect(() => {
    loadToken();
  }, [currentUser]);
  const renderItem = useMemo(() => {
    return !currentUser || !token ? (
      <AuthNavigator />
    ) : (
      <PrivateNavigator currentUser={currentUser} />
    );
  }, [currentUser, token]);

  return <>{renderItem}</>;
}

export default React.memo(AppNavigators);

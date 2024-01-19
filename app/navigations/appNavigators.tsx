import React, {useEffect, useState, useMemo} from 'react';
import AuthNavigator from './authNavigator';
import PrivateNavigator from './privateNavigator';
import selector from '../modules/auth/authSelectors';
import {useSelector} from 'react-redux';
import AuthToken from '../modules/auth/authToken';
import SplashScreen from 'react-native-splash-screen';
import {Platform} from 'react-native';
function AppNavigators() {
  const currentUser = useSelector(selector.selectCurrentUser);
  const [token, setToken] = useState<string | null>(null);
  const [tokenLoaded, setTokenLoaded] = useState(false);

  const loadToken = async () => {
    try {
      const data = await AuthToken.get();
      setToken(data);
    } catch (error) {
      console.error('Error loading token:', error);
    } finally {
      setTokenLoaded(true);
    }
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }
    loadToken();
  }, [currentUser]);

  const shouldShowAuthNavigator = useMemo(() => {
    return !currentUser || !tokenLoaded;
  }, [currentUser, tokenLoaded]);

  const renderItem = useMemo(() => {
    return shouldShowAuthNavigator ? (
      <AuthNavigator />
    ) : (
      <PrivateNavigator currentUser={currentUser} />
    );
  }, [currentUser, shouldShowAuthNavigator]);

  return <>{renderItem}</>;
}

export default React.memo(AppNavigators);

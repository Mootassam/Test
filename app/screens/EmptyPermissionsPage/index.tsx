import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import Button from '../../components/Button';
import {useDispatch, useSelector} from 'react-redux';
import authActions from '../../modules/auth/authActions';
import authSelectors from '../../modules/auth/authSelectors';
import {store} from '../../modules/store';
import {persistStore, persistReducer} from 'redux-persist';

function EmptyPermissionsPage() {
  const dispatch = useDispatch();
  const currentUser = useSelector(authSelectors.selectCurrentUser);
  const persistor = persistStore(store);

  const logout = () => {
    dispatch(authActions.doSignout());
  };
  return (
    <View style={{margin: 17}}>
      <Text style={styles.largeText}>Empty Permission</Text>
      {currentUser ? (
        <View>
          <Text>
            Thank you Mr {currentUser.fullName} for create account with us i
            would like to inform you that your account still not active to
            active just make screenshot and send it with your email to this link
          </Text>
          <Text> Link whatsApp</Text>
        </View>
      ) : (
        ''
      )}

      <Button text="logout" onPress={logout} />
    </View>
  );
}

export default EmptyPermissionsPage;

import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import styles from './styles';

function ChangePassword(props: {navigation: any}) {
  const {navigation} = props;
  return (
    <View style={styles.LoginComponenet}>
      <Text
        style={styles.textWelcome}
        onPress={() => navigation.navigate('Home')}>
        Create new password
      </Text>

      <Text style={styles.forgetPassword}>
        Your new password must be unique from those previously used.
      </Text>

      <View>
        <View style={styles.ViewInput}>
          <TextInput placeholder="New Password" style={styles.input} />
          <TextInput placeholder="Confirm Password" style={styles.input} />
        </View>
        <TouchableOpacity
          style={styles.Login}
          onPress={() => navigation.navigate('SuccessPassword')}>
          <Text style={styles.textLogin}>Reset Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ChangePassword;

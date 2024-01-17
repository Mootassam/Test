import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import styles from './styles';

function ForgetPassword(props: {navigation: any}) {
  const {navigation} = props;
  return (
    <View style={styles.LoginComponenet}>
      <Text
        style={styles.textWelcome}
        onPress={() => navigation.navigate('Home')}>
        Forgot Password?
      </Text>

      <Text style={styles.forgetPassword}>
        Don't worry! It occurs. Please enter the email address linked with your
        account.
      </Text>

      <View>
        <View style={styles.ViewInput}>
          <TextInput placeholder="Enter your email" style={styles.input} />
        </View>
        <TouchableOpacity
          style={styles.Login}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Otp')}>
          <Text style={styles.textLogin}>Send Code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default React.memo(ForgetPassword);

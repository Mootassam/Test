import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import styles from './styles';

function OTP(props: {navigation: any}) {
  const {navigation} = props;
  return (
    <View style={styles.LoginComponenet}>
      <Text
        style={styles.textWelcome}
        onPress={() => navigation.navigate('Home')}>
        OTP Verification
      </Text>

      <Text style={styles.forgetPassword}>
        Enter the verification code we just sent on your email address.
      </Text>

      <View>
        <View style={styles.ViewInput}>
          <TextInput placeholder="4" style={styles.inputOtp} maxLength={1} />
          <TextInput placeholder="5" style={styles.inputOtp} maxLength={1} />
          <TextInput placeholder="0" style={styles.inputOtp} maxLength={1} />
          <TextInput placeholder="7" style={styles.inputOtp} maxLength={1} />
        </View>
        <TouchableOpacity
          style={styles.Login}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('ChangePassword')}>
          <Text style={styles.textLogin}>Verify</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default OTP;

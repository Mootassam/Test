import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import Textinput from '../../components/TextInput';
import Button from '../../components/Button';

function Login(props: {navigation: any}) {
  const {navigation} = props;
  return (
    <View style={styles.LoginComponenet}>
      <Text
        style={styles.textWelcome}
        onPress={() => navigation.navigate('Home')}>
        Welcome back! Glad to see you, Again!
      </Text>

      <View>
        <View style={styles.ViewInput}>
          <Textinput placeholder="Enter your email" style={styles.input} />
          <Textinput placeholder="Enter your password" style={styles.input} />
        </View>
        <Text
          style={styles.textForgetPassword}
          onPress={() => navigation.navigate('Forgetpassword')}>
          Forget Password?
        </Text>
        <Button text="login" />
      </View>
      <View style={styles.noAccount}>
        <Text>Don't have an account? </Text>
        <Text
          style={styles.registerNow}
          onPress={() => navigation.navigate('Register')}>
          Register Now
        </Text>
      </View>
    </View>
  );
}

export default Login;

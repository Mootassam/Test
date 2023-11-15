import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import styles from './styles';

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
          <TextInput placeholder="Enter your email" style={styles.input} />
          <TextInput placeholder="Enter your Password" style={styles.input} />
        </View>
        <Text
          style={styles.textForgetPassword}
          onPress={() => navigation.navigate('Forgetpassword')}>
          Forget Password?
        </Text>
        <TouchableOpacity style={styles.Login}>
          <Text style={styles.textLogin}>Login</Text>
        </TouchableOpacity>
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

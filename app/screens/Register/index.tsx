import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import styles from './styles';
function Register(props: {navigation: any}) {
  const {navigation} = props;
  return (
    <View style={styles.LoginComponenet}>
      <Text
        style={styles.textWelcome}
        onPress={() => navigation.navigate('Home')}>
        Hello! Register to get started!
      </Text>

      <View>
        <View style={styles.ViewInput}>
          <TextInput placeholder="Username" style={styles.input} />
          <TextInput placeholder="Email" style={styles.input} />
          <TextInput placeholder="Password" style={styles.input} />
          <TextInput placeholder="Confirm password" style={styles.input} />
          <TextInput placeholder="Invitation code" style={styles.input} />
        </View>
        <TouchableOpacity style={styles.Login}  activeOpacity={0.7}>
          <Text style={styles.textLogin}>Register</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.noAccount}>
        <Text>Alreday have an account? </Text>
        <Text
          style={styles.registerNow}
          onPress={() => navigation.navigate('Login')}>
          Login Now
        </Text>
      </View>
    </View>
  );
}

export default Register;

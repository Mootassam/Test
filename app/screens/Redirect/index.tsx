import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';
import {Image} from 'react-native';
const logo = require('../../assets/images/logo.png');
import {Images} from '../../../config/images';
function Redirect(props: {navigation: any}) {
  const {navigation} = props;
  return (
    <ImageBackground source={Images.redirect} style={styles.backgroundImage}>
      <View style={styles.content}>
        <Image style={styles.Logo} source={Images.Logo} />
        <View style={styles.buttonStyle}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={styles.Login}>
            <Text style={styles.textLogin}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Register}
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.textregister}>Register</Text>
          </TouchableOpacity>
          <Text
            style={styles.contiueGuest}
            onPress={() => navigation.navigate('Home')}>
            Continue as a guest
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

export default Redirect;

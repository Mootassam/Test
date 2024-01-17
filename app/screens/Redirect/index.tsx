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
            style={styles.Login}
            activeOpacity={0.7}>
            <Text style={styles.textLogin}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Register}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.textregister}>Register</Text>
          </TouchableOpacity>
          <Text style={styles.contiueGuest}></Text>
        </View>
      </View>
    </ImageBackground>
  );
}

export default React.memo(Redirect);

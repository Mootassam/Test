import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';

import Icon from 'react-native-vector-icons/FontAwesome5'; // You can choose a different icon library if you prefer
import Button from '../../components/Button';

function ChangePassword() {
  return (
    <View style={styles.content}>
      <View>
        <Text style={styles.title}>Change Password</Text>
        <View style={styles.details}>
          <View style={styles.singleDetail}>
            <Icon name="lock" size={20} />
            <TextInput placeholder="Current password" secureTextEntry={true} />
          </View>
          <View style={styles.singleDetail}>
            <Icon name="lock" size={20} />
            <TextInput placeholder="New password" secureTextEntry={true} />
          </View>
          <View style={styles.singleDetail}>
            <Icon name="lock" size={20} />
            <TextInput placeholder="Confirm password" secureTextEntry={true} />
          </View>
        </View>
      </View>

      <Button text="Save Settings" />
    </View>
  );
}

export default ChangePassword;

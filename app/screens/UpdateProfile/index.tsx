import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';

import Icon from 'react-native-vector-icons/FontAwesome5'; // You can choose a different icon library if you prefer
import Button from '../../components/Button';

function UpdateProfile() {
  return (
    <View style={styles.content}>
      <View>
        <Text style={styles.title}>Personal Details</Text>
        <View style={styles.details}>
          <View style={styles.singleDetail}>
            <Icon name="user-circle" size={22} />
            <TextInput placeholder="Russell Austin" />
          </View>
          <View style={styles.singleDetail}>
            <Icon name="envelope" size={20} />
            <TextInput
              keyboardType="email-address"
              placeholder="russell.partner@gmail.com"
            />
          </View>
          <View style={styles.singleDetail}>
            <Icon name="phone" size={20} />
            <TextInput placeholder="+1  202  555  0142 " />
          </View>
          <View style={styles.singleDetail}>
            <Icon name="birthday-cake" size={20} />
            <TextInput placeholder="15/25/1666" />
          </View>
          <View style={styles.singleDetail}>
            <Icon name="flag" size={20} />
            <TextInput placeholder="Nationality" />
          </View>
          <View style={styles.singleDetail}>
            <Icon name="globe" size={20} />
            <TextInput placeholder="Country" />
          </View>
          <View style={styles.singleDetail}>
            <Icon name="map-marker-alt" size={20} />
            <TextInput placeholder="State" />
          </View>
        </View>
      </View>
    </View>
  );
}

export default UpdateProfile;

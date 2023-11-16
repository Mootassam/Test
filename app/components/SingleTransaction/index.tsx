import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import {Images} from '../../../config/images';
function SingleTransaction() {
  return (
    <View
      style={{
        paddingLeft: 17,
        paddingRight: 17,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E6EB',
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingTop: 10,
          paddingBottom: 10,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 12,
          }}>
          <View style={styles.circleReceived}>
            <FastImage
              source={Images.receive}
              resizeMode={FastImage.resizeMode.contain}
              style={{
                width: 15,
                height: 15,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
          </View>
          <View style={{display: 'flex', alignItems: 'flex-start'}}>
            <Text style={styles.smalltitle}>Received BTC</Text>
            <Text> Jun 26, 2021</Text>
          </View>
        </View>
        <View style={{display: 'flex', alignItems: 'flex-end'}}>
          <Text style={styles.money}> US$679.98</Text>
          <Text style={styles.success}>Success</Text>
        </View>
      </View>
    </View>
  );
}

export default SingleTransaction;

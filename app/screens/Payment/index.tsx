import React from 'react';
import styles from './styles';
import {View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Images} from '../../../config/images';
import QRCode from 'react-native-qrcode-svg';
import Button from '../../components/Button';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

function Payment(props: any) {
  const {navigation} = props;
  let base64Logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAA..';

  return (
    <View>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#fff',
          margin: 17,
          paddingTop: 17,
          paddingBottom: 17,
        }}>
        <FastImage
          source={Images.qrcode}
          style={{width: 230, height: 230, alignSelf: 'center'}}
          resizeMode={FastImage.resizeMode.contain}
        />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 4,
            columnGap: 9,
          }}>
          <Text style={{display: 'flex', fontSize: 15, color: 'black'}}>
            https://www.instagram.c
          </Text>
          <TouchableOpacity activeOpacity={0.9}>
            <View
              style={{
                display: 'flex',
                backgroundColor: 'black',
                width: 15,
                height: 15,
              }}></View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.detaillRecharge}>
        <Text style={styles.title}>Detail Recharge</Text>

        <View style={{display: 'flex', flexDirection: 'column', rowGap: 13}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text>The Amount</Text>
            <Text>USDT 111.46</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text>Request Number</Text>
            <Text>2023111611340445377</Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text>Upload The Screen Shot</Text>
            <TextInput placeholder="Enter The Transaction ID" />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text>HASH/TXID</Text>
            <TextInput placeholder="Enter The Transaction ID" />
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text>Payment Time</Text>
            <Text>2023-11-16 05:05:45</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Payment;

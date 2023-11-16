import React from 'react';
import {View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Images} from '../../../config/images';
import Button from '../../components/Button';
import Textinput from '../../components/TextInput';
function Withdraw() {
  return (
    <View
      style={{
        display: 'flex',
        paddingLeft: 17,
        paddingRight: 17,
        flexDirection: 'column',
        marginTop: 25,
        justifyContent: 'center',
        width: '100%',
      }}>
      <View style={{display: 'flex', flexDirection: 'column', gap: 15}}>
        <Textinput placeholder="Write the amount" />

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text>Solde</Text>
          <Text style={{fontSize: 14, color: '#85BB65', fontWeight: '800'}}>
            $100
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text>Management fees</Text>
          <Text style={{color: 'red'}}>0%</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text>Exchange rate</Text>
          <Text style={{color: 'black', fontWeight: '500', fontSize: 14}}>
            1:3.23
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text>Amount to be recognized</Text>
          <Text style={{color: 'black', fontWeight: '500', fontSize: 14}}>
            USDT 22.3
          </Text>
        </View>
        <Textinput placeholder="Write the password" />
      </View>
      <Button text="Submit Now" />

      <Text style={{display: 'flex', marginTop: 10, lineHeight: 20}}>
        Working hours in the Financial Department have been modified from 11:00
        am to 18:00 pm from Wednesday to Sunday. Withdrawals are suspended on
        Monday and Tuesday.
      </Text>
    </View>
  );
}

export default Withdraw;

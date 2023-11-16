import React from 'react';
import {View, Text} from 'react-native';
import Textinput from '../../components/TextInput';
import Button from '../../components/Button';
import FastImage from 'react-native-fast-image';
import {Images} from '../../../config/images';
function Recharge(props: any) {
  const {navigation} = props;
  const checkPayemnt = () => {
    navigation.navigate('Payment');
  };
  return (
    <View
      style={{
        display: 'flex',
        paddingLeft: 17,
        paddingRight: 17,
        flexDirection: 'column',

        justifyContent: 'center',
        width: '100%',
      }}>
      <FastImage
        source={Images.recharge}
        resizeMode="contain"
        style={{width: 330, height: 300, alignSelf: 'center'}}
      />
      <Textinput placeholder="Write the amount" />
      <View style={{marginTop: 20, gap: 15}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text>exchange rate</Text>
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
          <Text>Payment amount</Text>
          <Text style={{color: 'black', fontWeight: '500', fontSize: 14}}>
            USDT 22.3
          </Text>
        </View>
      </View>
      <Button text="Recharge Now" onPress={checkPayemnt} />
    </View>
  );
}

export default Recharge;

import React from 'react';
import {View, Text} from 'react-native';
import Textinput from '../../components/TextInput';
import Button from '../../components/Button';
import FastImage from 'react-native-fast-image';
import {Images} from '../../../config/images';
function Recharge() {
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

      <Button text="Recharge Now" />
    </View>
  );
}

export default Recharge;

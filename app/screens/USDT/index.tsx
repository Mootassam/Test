import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

import Button from '../../components/Button';
import Textinput from '../../components/TextInput';
function USDT() {
  return (
    <View style={styles.margin}>
      <Textinput placeholder="TRC20" />
      <Textinput placeholder="ERC20" />
      <Button text="Valider" />

      <View style={styles.textView}>
        <Text style={styles.warning}>Warning</Text>
        <Text style={styles.textwarning}>
          Please confirm that the binding account address is for your own use
          otherwise you will be responsible for any problems.
        </Text>
      </View>
    </View>
  );
}

export default USDT;

import React from 'react';
import {View,TextInput} from 'react-native';
import styles from './styles';

function Textinput(props: any) {
  return <TextInput placeholder={props.placeholder} style={styles.input} />;
}

export default Textinput;

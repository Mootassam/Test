import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import Spinner from '../../shared/Spinner';
function Button(props: any) {
  return (
    <TouchableOpacity style={styles.Login} activeOpacity={0.9} {...props}>
      {props.loading ? (
        <Spinner />
      ) : (
        <Text style={styles.textLogin}>{props.text}</Text>
      )}
    </TouchableOpacity>
  );
}

export default Button;

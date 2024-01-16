import React from 'react';
import {TextInput, Text, View} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

function Textinput(props: any) {
  const {
    placeholder,
    onChangeText,
    onFocus,
    secureTextEntry,
    value,
    multiline,
    onSubmitEditing,
    touched,
    errors,
    errorMessage,
  } = props;
  return (
    <View style={{display: 'flex', flexDirection: 'column'}}>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        onChangeText={text => onChangeText(text)}
        onFocus={() => onFocus()}
        autoCorrect={false}
        secureTextEntry={secureTextEntry}
        value={value}
        multiline={multiline}
        onSubmitEditing={onSubmitEditing}
      />
      {errorMessage && (
        <Text style={{fontSize: 15, color: 'red'}}>{errorMessage}</Text>
      )}
      {touched && errors && (
        <Text style={{fontSize: 13, color: 'red', paddingLeft: 10}}>
          {errors}
        </Text>
      )}
    </View>
  );
}

export default Textinput;

Textinput.prototype = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onChangeText: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  success: PropTypes.bool,
  secureTextEntry: PropTypes.bool,
  keyboardType: PropTypes.string,
  multiline: PropTypes.bool,
  textAlignVertical: PropTypes.string,
  icon: PropTypes.node,
  onSubmitEditing: PropTypes.func,
  touched: PropTypes.bool,
  errors: PropTypes.string,
};

Textinput.defaultProps = {
  style: {},
  onChangeText: (text: any) => {},
  onFocus: () => {},
  placeholder: 'Placeholder',
  value: '',
  success: true,
  secureTextEntry: false,
  keyboardType: 'default',
  multiline: false,
  textAlignVertical: 'center',
  icon: null,
  onSubmitEditing: () => {},
};

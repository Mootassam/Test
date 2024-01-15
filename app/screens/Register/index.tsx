import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import styles from './styles';
import * as yup from 'yup';
import {Formik} from 'formik';
import yupFormSchemas from '../../modules/shared/yup/yupFormSchemas';
import Textinput from '../../components/TextInput';
import Button from '../../components/Button';
function Register(props: {navigation: any}) {
  const {navigation} = props;

  const schema = yup.object().shape({
    username: yupFormSchemas.string('Username', {required: true}),
    email: yupFormSchemas.string('Email', {required: true}),
    password: yupFormSchemas.string('Password', {required: true}),
  });

  const [initialValues] = useState(() => {
    return {
      username: '',
      email: '',
      password: '',
      rememberMe: true,
    };
  });
  const onSubmit = (values: {
    username: string;
    password: string;
    rememberMe: boolean;
  }) => {
    Alert.alert('React native');
  };

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize={true}
      onSubmit={values => onSubmit(values)}
      validationSchema={schema}>
      {({
        values,
        handleChange,
        errors,
        setFieldTouched,
        touched,
        isValid,
        handleSubmit,
      }) => (
        <View style={styles.LoginComponenet}>
          <Text
            style={styles.textWelcome}
            onPress={() => navigation.navigate('Home')}>
            Hello! Register to get started!
          </Text>

          <View>
            <View style={styles.ViewInput}>
              <Textinput
                touched={touched.username}
                errors={errors.username}
                value={values.username}
                onChangeText={handleChange('username')}
                onBlur={() => setFieldTouched('username')}
                placeholder="Enter your username"
                style={styles.input}
              />
              <Textinput
                secureTextEntry={true}
                touched={touched.email}
                errors={errors.email}
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
                placeholder="Enter your Email"
                style={styles.input}
              />
              <Textinput
                secureTextEntry={true}
                touched={touched.password}
                errors={errors.password}
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={() => setFieldTouched('password')}
                placeholder="Enter your password"
                style={styles.input}
              />
              <Textinput
                secureTextEntry={true}
                touched={touched.password}
                errors={errors.password}
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={() => setFieldTouched('password')}
                placeholder="Enter your password"
                style={styles.input}
              />
            </View>
            <Button
              style={styles.Login}
              activeOpacity={0.7}
              text="Register"
              onPress={handleSubmit}
            />
          </View>
          <View style={styles.noAccount}>
            <Text>Alreday have an account? </Text>
            <Text
              style={styles.registerNow}
              onPress={() => navigation.navigate('Login')}>
              Login Now
            </Text>
          </View>
        </View>
      )}
    </Formik>
  );
}

export default Register;

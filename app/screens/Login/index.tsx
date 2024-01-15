import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import styles from './styles';
import Textinput from '../../components/TextInput';
import Button from '../../components/Button';
import * as yup from 'yup';
import {Formik} from 'formik';
import yupFormSchemas from '../../modules/shared/yup/yupFormSchemas';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import authActions from '../../modules/auth/authActions';
import authSelectors from '../../modules/auth/authSelectors';

function Login(props: {navigation: any}) {
  const dispatch = useDispatch();
  const loading = useSelector(authSelectors.selectLoading);
  const errorMessage = useSelector(authSelectors.errorMessage);

  const schema = yup.object().shape({
    username: yupFormSchemas.string('email', {required: true}),
    password: yupFormSchemas.string('password', {required: true}),
  });

  const [initialValues] = useState(() => {
    return {
      username: '',
      password: '',
      rememberMe: true,
    };
  });

  const {navigation} = props;

  const onSubmit = (values: {username: string; password: string}) => {
    dispatch<any>(
      authActions.doSigninWithEmailAndPassword(
        values.username,
        values.password,
      ),
    );
  };

  useEffect(() => {
    authActions.doClearErrorMessage();
  }, []);

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
            Welcome back! Glad to see you, Again!
          </Text>

          <View>
            <View style={styles.ViewInput}>
              <Textinput
                onChangeText={handleChange('username')}
                onBlur={() => setFieldTouched('username')}
                touched={touched.username}
                errors={errors.username}
                placeholder="Enter your email"
                style={styles.input}
                value={values.username}
                errorMessage={errorMessage}
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
            <Text
              style={styles.textForgetPassword}
              onPress={() => navigation.navigate('Forgetpassword')}>
              Forget Password?
            </Text>
            <Button text="login" onPress={handleSubmit} loading={loading} />
          </View>
          <View style={styles.noAccount}>
            <Text>Don't have an account? </Text>
            <Text
              style={styles.registerNow}
              onPress={() => navigation.navigate('Register')}>
              Register Now
            </Text>
          </View>
        </View>
      )}
    </Formik>
  );
}

export default Login;

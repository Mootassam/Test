import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './styles';
import * as yup from 'yup';
import {Formik} from 'formik';
import yupFormSchemas from '../../modules/shared/yup/yupFormSchemas';
import Textinput from '../../components/TextInput';
import Button from '../../components/Button';
import {useDispatch, useSelector} from 'react-redux';
import authActions from '../../modules/auth/authActions';
import authSelectors from '../../modules/auth/authSelectors';
import {SafeAreaView} from 'react-native-safe-area-context';
function Register(props: {navigation: any}) {
  const {navigation} = props;
  const dispatch = useDispatch();
  const loading = useSelector(authSelectors.selectLoading);
  const errorMessage = useSelector(authSelectors.errorMessage);

  const schema = yup.object().shape({
    email: yupFormSchemas.string('Email', {required: true}),
    phoneNumber: yupFormSchemas.string('Phone Number', {required: true}),
    country: yupFormSchemas.string('Country', {required: true}),
    password: yupFormSchemas.string('Password', {required: true}),
    confirmPassword: yupFormSchemas
      .string('Confirm Password', {required: true})
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  });
  const [initialValues] = useState(() => {
    return {
      email: '',
      phoneNumber: '',
      country: '',
      password: '',
      confirmPassword: '',
      rememberMe: true,
    };
  });
  const onSubmit = (values: {
    email: string;
    phoneNumber: string;
    country: string;
    password: string;
    confirmPassword: string;
  }) => {
    dispatch(
      authActions.doRegisterEmailAndPassword(
        values.email,
        values.phoneNumber,
        values.country,
        values.password,
      ),
    );
  };
  useEffect(() => {
    dispatch(authActions.doClearErrorMessage());
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{marginBottom: 26}}>
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
                    touched={touched.email}
                    errors={errors.email}
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={() => setFieldTouched('email')}
                    placeholder="Enter your Email"
                    style={styles.input}
                    errorMessage={errorMessage}
                  />
                  <Textinput
                    touched={touched.phoneNumber}
                    errors={errors.phoneNumber}
                    value={values.phoneNumber}
                    onChangeText={handleChange('phoneNumber')}
                    onBlur={() => setFieldTouched('phoneNumber')}
                    placeholder="Enter your phone Number"
                    style={styles.input}
                  />
                  <Textinput
                    touched={touched.country}
                    errors={errors.country}
                    value={values.country}
                    onChangeText={handleChange('country')}
                    onBlur={() => setFieldTouched('country')}
                    placeholder="Enter your Country"
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
                    touched={touched.confirmPassword}
                    errors={errors.confirmPassword}
                    value={values.confirmPassword}
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={() => setFieldTouched('confirmPassword')}
                    placeholder="Enter your Confirm Password"
                    style={styles.input}
                  />
                </View>
                <Button
                  style={styles.Login}
                  activeOpacity={0.7}
                  text="Register"
                  onPress={handleSubmit}
                  loading={loading}
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
      </ScrollView>
    </SafeAreaView>
  );
}

export default React.memo(Register);

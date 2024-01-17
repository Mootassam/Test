import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5'; // You can choose a different icon library if you prefer
import Button from '../../components/Button';
import * as yup from 'yup';
import yupFormSchemas from '../../modules/shared/yup/yupFormSchemas';
import {Formik} from 'formik';
import Textinput from '../../components/TextInput';
import {useDispatch, useSelector} from 'react-redux';
import authActions from '../../modules/auth/authActions';
import authSelectors from '../../modules/auth/authSelectors';

function ChangePassword() {
  const dispatch = useDispatch();
  const loading = useSelector(authSelectors.loadingChangePassword);
  const schema = yup.object().shape({
    currentPassword: yupFormSchemas.string('Current Password', {
      required: true,
    }),
    newPassword: yupFormSchemas.string('New Password', {required: true}),
    confirmPassword: yupFormSchemas
      .string('Confirm Password', {required: true})
      .oneOf([yup.ref('newPassword'), null], 'Passwords must match'),
  });

  const onSubmit = values => {
    dispatch(
      authActions.doChangePassword(values.currentPassword, values.newPassword),
    );
  };
  const [initialValues] = useState(() => {
    return {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    };
  });
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
        <View style={styles.content}>
          <View>
            <Text style={styles.title}>Change Password</Text>
            <View style={styles.details}>
              <Textinput
                onChangeText={handleChange('currentPassword')}
                onBlur={() => setFieldTouched('currentPassword')}
                touched={touched.currentPassword}
                errors={errors.currentPassword}
                placeholder="Current Password"
                style={styles.input}
                value={values.currentPassword}
              />

              <Textinput
                onChangeText={handleChange('newPassword')}
                onBlur={() => setFieldTouched('newPassword')}
                touched={touched.newPassword}
                errors={errors.newPassword}
                placeholder="New Password"
                style={styles.input}
                value={values.newPassword}
              />

              <Textinput
                onChangeText={handleChange('confirmPassword')}
                onBlur={() => setFieldTouched('confirmPassword')}
                touched={touched.confirmPassword}
                errors={errors.confirmPassword}
                placeholder="Confirm Password "
                style={styles.input}
                value={values.confirmPassword}
              />
            </View>
          </View>

          <Button text="Submit" onPress={handleSubmit} loading={loading} />
        </View>
      )}
    </Formik>
  );
}

export default ChangePassword;

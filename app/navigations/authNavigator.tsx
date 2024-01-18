import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Login = React.lazy(() => import('../screens/Login'));
const Register = React.lazy(() => import('../screens/Register'));
import Redirect from '../screens/Redirect';
const ForgetPassword = React.lazy(() => import('../screens/ForgetPassword'));
const OTP = React.lazy(() => import('../screens/Otp'));
const SuccessPassword = React.lazy(() => import('../screens/SuccessPassword'));
function AuthNavigator() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#fff',
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: '#000',
        },
      }}
      initialRouteName="Redirect">
      <Stack.Screen
        name="Redirect"
        component={Redirect}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerTitleAlign: 'center', gestureEnabled: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerTitleAlign: 'center'}}
      />
      <Stack.Screen
        name="Forgetpassword"
        component={ForgetPassword}
        options={{headerTitleAlign: 'center', title: 'Forget Password'}}
      />
      <Stack.Screen name="Otp" component={OTP} options={{headerShown: false}} />

      <Stack.Screen
        name="SuccessPassword"
        component={SuccessPassword}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default React.memo(AuthNavigator);

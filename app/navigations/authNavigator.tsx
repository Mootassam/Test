import React, {useRef} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Redirect from '../screens/Redirect';
import ForgetPassword from '../screens/ForgetPassword/Index';
import OTP from '../screens/Otp';
import ChangePassword from '../screens/ChangePassword';
import SuccessPassword from '../screens/SuccessPassword';
import {Animated, View} from 'react-native';

function AuthNavigator({currentUser}) {
  const Stack = createStackNavigator();
  const tabOffsetValue = useRef(new Animated.Value(0)).current;


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
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
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

export default AuthNavigator;

import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import BottomTabNavigator from './BottomTabNavigator';
import UpdateProfile from '../screens/UpdateProfile';
import ChangePassword from '../screens/ChangePassword';

function PrivateNavigator() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#fff',
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: '#000',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Updateprofile"
        component={UpdateProfile}
        options={{
          title: 'About me',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{
          headerTitleAlign: 'center',
          title: 'Change Password',
        }}
      />
    </Stack.Navigator>
  );
}

export default PrivateNavigator;

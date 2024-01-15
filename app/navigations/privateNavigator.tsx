import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import BottomTabNavigator from './BottomTabNavigator';
import UpdateProfile from '../screens/UpdateProfile';
import ChangePassword from '../screens/ChangePassword';
import {useSelector} from 'react-redux';
import selector from '../modules/auth/authSelectors';
import PermissionChecker from '../modules/auth/permissionChecker';
import EmptyPermissionsPage from '../screens/EmptyPermissionsPage';

function PrivateNavigator() {
  const Stack = createStackNavigator();
  const currentTenant = useSelector(selector.currentTenant);
  const currentUser = useSelector(selector.selectCurrentUser);
  const permissionChecker = new PermissionChecker(currentUser, currentTenant);
  if (permissionChecker.isEmptyPermissions) {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          presentation: 'modal',
        }}
        initialRouteName="EmptyPermissionsPage">
        <Stack.Screen
          name={'EmptyPermissionsPage'}
          component={EmptyPermissionsPage}
        />
      </Stack.Navigator>
    );
  }
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#fff',
        headerBackTitleVisible: false,
        presentation: 'modal',
        headerStyle: {
          backgroundColor: '#000',
        },
      }}>
      <Stack.Screen
        name="Overview"
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

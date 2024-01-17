import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {useSelector} from 'react-redux';
import BottomTabNavigator from './BottomTabNavigator';
import UpdateProfile from '../screens/UpdateProfile';
import ChangePassword from '../screens/ChangePassword';
import selector from '../modules/auth/authSelectors';
import PermissionChecker from '../modules/auth/permissionChecker';
import EmptyPermissionsPage from '../screens/EmptyPermissionsPage';
import Login from '../screens/Login';

function PrivateNavigator({currentUser}) {
  const Stack = createStackNavigator();
  const currentTenant = useSelector(selector.currentTenant);
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

  if (!permissionChecker.isAuthenticated) {
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: 'modal',
      }}
      initialRouteName="Login">
      <Stack.Screen name={'EmptyPermissionsPage'} component={Login} />
    </Stack.Navigator>;
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

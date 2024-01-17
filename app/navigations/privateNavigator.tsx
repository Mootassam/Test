import {createStackNavigator} from '@react-navigation/stack';
import React, {useMemo} from 'react';
import {useSelector} from 'react-redux';
import BottomTabNavigator from './BottomTabNavigator';
import selector from '../modules/auth/authSelectors';
import PermissionChecker from '../modules/auth/permissionChecker';
import EmptyPermissionsPage from '../screens/EmptyPermissionsPage';
const UpdateProfile = React.lazy(() => import('../screens/UpdateProfile'));
const ChangePassword = React.lazy(() => import('../screens/ChangePassword'));
const Login = React.lazy(() => import('../screens/Login'));

function PrivateNavigator({currentUser}) {
  const Stack = createStackNavigator();
  const currentTenant = useSelector(selector.currentTenant);
  const permissionChecker = useMemo(
    () => new PermissionChecker(currentUser, currentTenant),
    [currentUser, currentTenant],
  );
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

export default React.memo(PrivateNavigator);

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Team from '../screens/Team';
import Profile from '../screens/Profile';
import Icon from 'react-native-vector-icons/FontAwesome5'; // You can choose a different icon library if you prefer
function BottomTabNavigator() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarActiveTintColor: '#FF0000',
        tabBarInactiveTintColor: '#252525',
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'white',
        },
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon solid name="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Team"
        component={Team}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="users" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;

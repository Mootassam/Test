import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Team from '../screens/Team';
import Profile from '../screens/Profile';
import Icon from 'react-native-vector-icons/FontAwesome5';

function BottomTabNavigator() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        animationEnabled: true,
        headerShown: false,
        tabBarActiveTintColor: '#a2703d',
        tabBarInactiveTintColor: '#252525',
        tabBarShowLabel: false,
        pressOpacity: 1,
        tabBarStyle: {
          display: 'flex',
          flexDirection: 'row',
          bottom: 0,
          left: 0,
          right: 0,
          height: 60,
          backgroundColor: 'white',
          justifyContent: 'space-between',
          width: '100%',
          paddingHorizontal: 20, // Adjusted padding
        },
        tabBarIcon: ({color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Team') {
            iconName = 'users';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Team" component={Team} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default React.memo(BottomTabNavigator);

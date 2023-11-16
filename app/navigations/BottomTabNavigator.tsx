import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Tasks from '../screens/Tasks';
import Vip from '../screens/Vip';
import Team from '../screens/Team';
import Profile from '../screens/Profile';
import Icon from 'react-native-vector-icons/FontAwesome5'; // You can choose a different icon library if you prefer
import {Image, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Images} from '../../config/images';
function BottomTabNavigator() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarActiveTintColor: '#F82A4F',
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
        name="Tasks"
        component={Tasks}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="tasks" size={size} color={color} />
          ),
          // Hide the header for this screen
        }}
      />

      <Tab.Screen
        name="Vip"
        component={Vip}
        options={{
          headerTitle: 'Choose your Plan',
          headerTitleAlign: 'center',

          tabBarIcon: ({color, size}) => (
            <TouchableOpacity  activeOpacity={0.7}>
              <View
                style={{
                  borderRadius: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                  bottom: 20,
                }}>
                <Image source={Images.vip} style={{width: 60, height: 60}} />
              </View>
            </TouchableOpacity>
          ),
        }}
      />

      <Tab.Screen
        name="Team"
        component={Team}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="wallet" size={size} color={color} />
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

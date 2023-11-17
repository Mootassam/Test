import React, {useRef} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Redirect from '../screens/Redirect';
import ForgetPassword from '../screens/ForgetPassword/Index';
import OTP from '../screens/Otp';
import ChangePassword from '../screens/ChangePassword';
import SuccessPassword from '../screens/SuccessPassword';
import {Animated, View} from 'react-native';
import Categories from '../screens/Categories';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CategoriesDetail from '../screens/CategoriesDetail';
import DetaillProduct from '../screens/DetaillProduct';
import WriteReview from '../screens/WriteReview';
import Exchange from '../screens/Recharge';
import History from '../screens/History/Recharge';
import PersonalDetaill from '../screens/PersonalDetaill/Recharge';
import Recharge from '../screens/Recharge';
import Withdraw from '../screens/Withdraw';
import Payment from '../screens/Payment';
import CompanyProfile from '../screens/CompanyProfile';
import Video from '../screens/Video';
import USDT from '../screens/USDT';
import UpdateProfile from '../screens/UpdateProfile';
import Investing from '../screens/Investing';
import Lottery from '../screens/Lottery';
import FAQ from '../screens/FAQ';

function AuthNavigator() {
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
        options={{title: 'Forget Password'}}
      />
      <Stack.Screen name="Otp" component={OTP} options={{headerShown: false}} />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="SuccessPassword"
        component={SuccessPassword}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{
          headerTitleAlign: 'center',
          headerRight: () => (
            <Icon
              name="filter"
              color={'white'}
              size={17}
              style={{marginRight: 20}}
            />
          ),
        }}
      />

      <Stack.Screen
        name="CategoriesDetail"
        component={CategoriesDetail}
        options={{
          headerTitleAlign: 'center',
          headerRight: () => (
            <Icon
              name="filter"
              color={'white'}
              size={17}
              style={{marginRight: 20}}
            />
          ),
        }}
      />

      <Stack.Screen
        name="DetaillProduct"
        component={DetaillProduct}
        options={{
          title: 'Detail Product',
          headerTitleAlign: 'center',
        }}
      />

      <Stack.Screen
        name="WriteReview"
        component={WriteReview}
        options={{
          title: 'Write Reviews',
          headerTitleAlign: 'center',
        }}
      />

      <Stack.Screen
        name="Exchange"
        component={Exchange}
        options={{
          title: 'Exchange',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="History"
        component={History}
        options={{
          title: 'History',
          headerTitleAlign: 'center',
        }}
      />

      <Stack.Screen
        name="CompanyProfile"
        component={CompanyProfile}
        options={{
          title: 'Company Profile',
          headerTitleAlign: 'center',
        }}
      />

      <Stack.Screen
        name="Video"
        component={Video}
        options={{
          title: 'Video',
          headerTitleAlign: 'center',
        }}
      />

      <Stack.Screen
        name="Usdt"
        component={USDT}
        options={{
          title: 'Wallet',
          headerTitleAlign: 'center',
        }}
      />

      <Stack.Screen
        name="Updateprofile"
        component={UpdateProfile}
        options={{
          title: 'Update Profile',
          headerTitleAlign: 'center',
        }}
      />

      <Stack.Screen
        name="FAQ"
        component={FAQ}
        options={{
          title: 'FAQ',
          headerTitleAlign: 'center',
        }}
      />

      <Stack.Screen
        name="Investing"
        component={Investing}
        options={{
          title: 'Investing',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="PersonalDetaill"
        component={PersonalDetaill}
        options={{
          title: 'Personal Detail',
          headerTitleAlign: 'center',
        }}
      />

      <Stack.Screen
        name="Lottery"
        component={Lottery}
        options={{
          title: 'Lottery',
          headerTitleAlign: 'center',
        }}
      />

      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{
          title: 'Payment',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Recharge"
        component={Recharge}
        options={{
          title: 'Recharge',
          headerTitleAlign: 'center',
        }}
      />

      <Stack.Screen
        name="Withdraw"
        component={Withdraw}
        options={{
          title: 'Withdraw',
          headerTitleAlign: 'center',
        }}
      />

      <Stack.Screen
        name="AddressUsdt"
        component={USDT}
        options={{
          title: 'Address Usdt',
          headerTitleAlign: 'center',
        }}
      />

      <Stack.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;

import React from 'react';
import {View, Text, Modal, Image} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';
// @ts-ignore
import Icon from 'react-native-vector-icons/FontAwesome5'; // You can choose a different icon library if you prefer
import {Images} from '../../../config/images';
import {useDispatch} from 'react-redux';
import authActions from '../../modules/auth/authActions';

// @ts-ignore
function Profile(props) {
  const dispatch = useDispatch();
  const {navigation} = props;
  // @ts-ignore
  const QuickActionItem = ({text, route, icon}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate(route)}
      activeOpacity={0.7}>
      <View style={{alignItems: 'center'}}>
        <View style={styles.small}>
          <Icon name={icon} size={25} color="#7C65BA" />
        </View>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
  // @ts-ignore
  const ActionItem = ({text, route, icon}) => (
    <TouchableOpacity
      onPress={() => renderAction(route)}
      activeOpacity={0.7}
      style={{width: '100%'}}>
      <View style={styles.cadre}>
        <View style={styles.icon}>
          <Icon name={icon} size={25} />
          <Text>{text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const quickActions = [
    {text: 'Exchange', route: 'Exchange', icon: 'exchange-alt'},
    {text: 'Recharge', route: 'Recharge', icon: 'paper-plane'},
    {text: 'Withdraw', route: 'Withdraw', icon: 'vote-yea'},
    {text: 'History', route: 'History', icon: 'history'},
  ];

  const paymentList = [
    {text: 'Personal Information', route: 'Updateprofile', icon: 'user'},
    {text: 'Change Password', route: 'ChangePassword', icon: 'lock'},
    {
      text: 'Logout',
      route: 'Redirect',
      icon: 'sign-out-alt',
    },
  ];

  const renderAction = item => {
    if (item === 'Redirect') {
      logout();
    }
    if (item === 'Updateprofile') {
      navigation.navigate('Updateprofile');
    }
    if (item === 'ChangePassword') {
      navigation.navigate('ChangePassword');
    }
  };

  const logout = () => {
    dispatch(authActions.doSignout());
  };

  // @ts-ignore
  const renderQuickActionItem = ({item}) => (
    <QuickActionItem text={item.text} route={item.route} icon={item.icon} />
  );
  // @ts-ignore
  const renderActionItem = ({item}) => (
    <ActionItem text={item.text} route={item.route} icon={item.icon} />
  );
  return (
    <View style={styles.linearGradient}>
      <View style={styles.content}>
        <View style={{display: 'flex', marginTop: 10}}>
          {/* quick actions  */}
          {/* List actions  */}
          <View style={styles.allactions}>
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                paddingBottom: 19,
              }}>
              <Image
                source={Images.UAE}
                style={{height: 160}}
                resizeMode="contain"
              />
            </View>
            <View>
              <Text style={{fontSize: 12}}>
                (*) Review your personal details here. It's important to ensure
                that your information is accurate for a smooth visa application
                process.
              </Text>

              <FlatList
                data={paymentList}
                renderItem={renderActionItem}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{
                  display: 'flex',
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Profile;

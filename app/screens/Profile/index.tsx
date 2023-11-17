import React from 'react';
import {View, Text, Modal} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
// @ts-ignore
import Icon from 'react-native-vector-icons/FontAwesome5'; // You can choose a different icon library if you prefer

// @ts-ignore
function Profile(props) {
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
      onPress={() => navigation.navigate(route)}
      activeOpacity={0.7}>
      <View style={styles.cadre}>
        <View style={styles.icon}>
          <Icon name={icon} size={25} />
        </View>
        <Text style={styles.text} numberOfLines={2}>
          {text}
        </Text>
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
    {text: 'Personal', route: 'Updateprofile', icon: 'user'},
    {text: 'Video', route: 'Video', icon: 'video'},
    {text: 'Investing', route: 'Investing', icon: 'hand-holding-usd'},
    {text: 'Lottery', route: 'Lottery', icon: 'dice-four'},
    {text: 'Company profile', route: 'CompanyProfile', icon: 'building'},
    {text: 'FAQ', route: 'FAQ', icon: 'question'},
    {text: 'USDT', route: 'AddressUsdt', icon: 'dollar-sign'},
    {text: 'Logout', route: 'Redirect', icon: 'sign-out-alt'},
  ];
  // @ts-ignore
  const renderQuickActionItem = ({item}) => (
    <QuickActionItem text={item.text} route={item.route} icon={item.icon} />
  );
  // @ts-ignore
  const renderActionItem = ({item}) => (
    <ActionItem text={item.text} route={item.route} icon={item.icon} />
  );
  return (
    <LinearGradient
      colors={['#2D0070', '#3D0095', '#3E0199']}
      style={styles.linearGradient}>
      <View style={styles.content}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 22,
            paddingRight: 22,
          }}>
          <View style={styles.cricle}>
            <Icon name="user-circle" size={30} color="white" />
          </View>

          <View style={styles.notification}>
            <Icon name="headset" size={30} color="white" />
          </View>
        </View>
        <View style={styles.amoutncontent}>
          <Text style={styles.availablebalance}>Available Balance</Text>
          <Text style={styles.amount}>$50.54</Text>
        </View>
        <View style={{display: 'flex', alignItems: 'center', marginTop: 32}}>
          {/* quick actions  */}
          <View style={styles.quickActions}>
            <FlatList
              data={quickActions}
              renderItem={renderQuickActionItem}
              keyExtractor={(item, index) => index.toString()}
              horizontal
              contentContainerStyle={{
                justifyContent: 'space-around',
                flexGrow: 1,
              }}
            />
          </View>

          {/* List actions  */}

          <View style={styles.allactions}>
            <Text style={styles.title}>Payment List</Text>
            <FlatList
              data={paymentList}
              renderItem={renderActionItem}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                columnGap: 33,
                rowGap: 5,
              }}
            />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

export default Profile;

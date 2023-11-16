import React from 'react';
import {View, Text, Modal} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
// @ts-ignore
function Profile(props) {
  const {navigation} = props;
  // @ts-ignore
  const QuickActionItem = ({text, route}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate(route)}
      activeOpacity={0.7}>
      <View style={{alignItems: 'center'}}>
        <View style={styles.small}></View>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
  // @ts-ignore
  const ActionItem = ({text, route}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate(route)}
      activeOpacity={0.7}>
      <View style={styles.cadre}>
        <View style={styles.icon}></View>
        <Text style={styles.text} numberOfLines={2}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const quickActions = [
    {text: 'Exchange', route: 'Exchange'},
    {text: 'Recharge', route: 'Recharge'},
    {text: 'Withdraw', route: 'Withdraw'},
    {text: 'History', route: 'History'},
  ];
  const paymentList = [
    {text: 'Personal', route: 'Redirect'},
    {text: 'Video', route: 'Redirect'},
    {text: 'Investing', route: 'Redirect'},
    {text: 'Lottery', route: 'Lottery'},
    {text: 'Company profile', route: 'Redirect'},
    {text: 'FAQ', route: 'Redirect'},
    {text: 'USDT', route: 'Redirect'},
    {text: 'Logout', route: 'Redirect'},
  ];
  // @ts-ignore
  const renderQuickActionItem = ({item}) => (
    <QuickActionItem text={item.text} route={item.route} />
  );
  // @ts-ignore
  const renderActionItem = ({item}) => (
    <ActionItem text={item.text} route={item.route} />
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
          <View style={styles.cricle}></View>
          <View style={styles.notification}></View>
        </View>
        <View style={styles.amoutncontent}>
          <Text style={styles.availablebalance}>Available Balance</Text>
          <Text style={styles.amount}>$450.54</Text>
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

import React from 'react';
import {View, Text, Modal} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

function Profile() {
  const renderItem = ({item}: {item: ItemData}) => {
    return (
      <TouchableOpacity>
        <Text>{item.title}</Text>
      </TouchableOpacity>
    );
  };
  type ItemData = {
    id: String;
    title: String;
  };
  const data: ItemData[] = [
    {
      id: '0',
      title: 'Investing',
    },
    {
      id: 'Login',
      title: 'Logout',
    },
  ];
  return (
    <View>
      <View>
        <FlatList data={data} renderItem={renderItem} />
      </View>
    </View>
  );
}

export default Profile;

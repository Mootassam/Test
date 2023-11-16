import React from 'react';
import {View, Text} from 'react-native';
import {Rating} from 'react-native-ratings';
import styles from './styles';
import FastImage from 'react-native-fast-image';
function SingleTask(props: any) {
  return (
    <View style={styles.content}>
      <View style={styles.vip0}>
        <Text style={styles.textvip}>VIP0</Text>
      </View>
      <View>
        <FastImage
          source={{
            uri: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          resizeMode={FastImage.resizeMode.contain}
          style={{width: 150, height: 100}}
        />
      </View>
      <View style={styles.product}>
        <Text
          style={styles.titleproduct}
          numberOfLines={2}
          ellipsizeMode="tail">
          IM the best in the world and i know that that the world and i know
          that that
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 3,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 14}}>Your Rating</Text>
          <Rating type="star" ratingCount={7} imageSize={10} readonly />
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 3,
          }}>
          <Text style={{fontSize: 14}}>Unit price</Text>
          <Text style={{fontSize: 14, color: '#85BB65', fontWeight: '800'}}>
            $5.2
          </Text>
        </View>
      </View>
    </View>
  );
}

export default SingleTask;

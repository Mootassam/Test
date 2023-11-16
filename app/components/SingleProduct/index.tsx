import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {Images} from '../../../config/images';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FastImage from 'react-native-fast-image';
// @ts-ignore
function SingleProduct(props) {
  const {navigation} = props;
  return (
    <View style={styles.singleProduct}>
      <TouchableOpacity
        onPress={() => navigation.navigate('DetaillProduct')}
        activeOpacity={0.7}>
        <View style={styles.vip0}>
          <Text style={styles.textvip}>VIP0</Text>
        </View>
        <View>
          <FastImage
            source={{
              uri:
                'https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ||
                '',
            }}
            style={styles.imageProduct}
            resizeMode="cover"
          />
          <Rating type="star" ratingCount={7} imageSize={15} readonly />
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            paddingLeft: 17,
            paddingRight: 17,
            paddingBottom: 17,
          }}>
          <Text
            style={styles.productTitle}
            numberOfLines={2}
            ellipsizeMode="tail">
            Title of the Product Title of the Product Title of the Product Title
            of the Product
          </Text>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.payment}>Payment :</Text>
            <Text style={styles.amount}>$250</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default SingleProduct;

import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {Images} from '../../../config/images';
import {TouchableOpacity} from 'react-native-gesture-handler';
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
          <Image
            source={Images.Logo}
            style={styles.imageProduct}
            resizeMode="cover"
          />
          <Rating type="star" ratingCount={7} imageSize={15} readonly />
        </View>
        <Text style={styles.productTitle}>Title of the Product</Text>
        <Text>Payment commission : $250</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SingleProduct;

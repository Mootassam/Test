import React from 'react';
import {View, Text} from 'react-native';
// @ts-ignore
import {SliderBox} from 'react-native-image-slider-box';
import {Rating, AirbnbRating} from 'react-native-ratings';

import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
function DetaillProduct(props: any) {
  const {navigation} = props;
  const images = [
    'https://source.unsplash.com/1024x768/?hotel',
    'https://source.unsplash.com/1024x768/?kitchen',
    'https://source.unsplash.com/1024x768/?pool',
    'https://source.unsplash.com/1024x768/?bedroom', // Network image
  ];

  return (
    <>
      <View>
        <SliderBox images={images} sliderBoxHeight={300} />

        <View style={styles.detaillProduct}>
          <Text style={styles.amount}>$2.22 </Text>
          <Text style={styles.titleProduct}>Organic Lemons</Text>
          <View style={styles.rating}>
            <Text style={styles.start}> 4.5</Text>
            <Rating
              type="star"
              ratingCount={7}
              imageSize={12}
              ratingBackgroundColor="transparent"
            />
            <Text style={styles.numberReview}> (89 reviews)</Text>
          </View>
          <Text style={styles.description}>
            Organic Mountain works as a seller for many organic growers of
            organic lemons. Organic lemons are easy to spot in your produce
            aisle. They are just like regular lemons, but they will usually have
            a few more scars on the outside of the lemon skin. Organic lemons
            are considered to be the world's finest lemon for juicing{' '}
          </Text>
        </View>
      </View>
      <View style={styles.background}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('WriteReview')}>
          <View style={styles.startRating}>
            <Text style={styles.review}> Leave a review today</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default DetaillProduct;

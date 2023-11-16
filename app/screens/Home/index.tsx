import React from 'react';
import {View, Text, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
// @ts-ignore
import {SliderBox} from 'react-native-image-slider-box';
import FastImage from 'react-native-fast-image';
import {Images} from '../../../config/images';

import {Rating, AirbnbRating} from 'react-native-ratings';
import SingleProduct from '../../components/SingleProduct';

function Home(props: any) {

  const {navigation} = props;
  const images = [
    'https://source.unsplash.com/1024x768/?nature',
    'https://source.unsplash.com/1024x768/?water',
    'https://source.unsplash.com/1024x768/?girl',
    'https://source.unsplash.com/1024x768/?tree', // Network image
  ];
  return (
    <ScrollView style={styles.home}>
      <SliderBox images={images} />

      <View style={styles.categories}>
        <Text style={styles.Textcategories}>Categories</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Categories')}  activeOpacity={0.7}> 
          <Text> Show All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.categoriesSingle}>
          <View style={styles.categoriesItem}>
            <FastImage
              source={Images.vip0}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
          <Text style={styles.catergorytitle}>Vegetables</Text>
        </View>
        <View style={styles.categoriesSingle}>
          <View style={styles.categoriesItem}>
            <FastImage
              source={Images.vip0}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
          <Text style={styles.catergorytitle}>Fruits</Text>
        </View>
        <View style={styles.categoriesSingle}>
          <View style={styles.categoriesItem}>
            <FastImage
              source={Images.vip0}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
          <Text style={styles.catergorytitle}>Grocery</Text>
        </View>
        <View style={styles.categoriesSingle}>
          <View style={styles.categoriesItem}>
            <FastImage source={Images.vip0} resizeMode={FastImage.resizeMode.contain} />
          </View>
          <Text style={styles.catergorytitle}>Edible oil</Text>
        </View>
        <View style={styles.categoriesSingle}>
          <View style={styles.categoriesItem}>
            <FastImage source={Images.vip0} resizeMode={FastImage.resizeMode.contain} />
          </View>
          <Text style={styles.catergorytitle}>Household</Text>
        </View>
        <View style={styles.categoriesSingle}>
          <View style={styles.categoriesItem}>
            <FastImage source={Images.vip0} resizeMode={FastImage.resizeMode.contain} />
          </View>
          <Text style={styles.catergorytitle}>Hotels</Text>
        </View>
      </ScrollView>

      {/* styling the FeaturedProdcut */}

      <View>
        <View style={styles.FeautredProduct}>
          <Text style={styles.Textcategories}>Featured products </Text>
          <Text>Show All</Text>
        </View>

        <View style={styles.scrollViewproduct}>
          <View style={styles.groupProducts}>
            <View style={styles.listProduct}>
              {Array.from({length: 6}).map(() => (
                <SingleProduct {...props} />
              ))}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default Home;

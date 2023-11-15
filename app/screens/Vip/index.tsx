import React from 'react';
import {View, Image, ScrollView, StyleSheet} from 'react-native';
import {Images} from '../../../config/images';

const Vip = () => {
  const vipImages = [
    Images.vip0,
    Images.vip1,
    Images.vip2,
    Images.vip3,
    Images.vip4,
    Images.vip5,
    Images.vip6,
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {vipImages.map((image, index) => (
          <Image
            key={index}
            source={image}
            style={styles.image}
            resizeMode="contain"
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginTop: 20,
  },
  scrollViewContent: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: 30, // Adjust the padding to control the space between images
  },
  image: {
    height: 218,
    alignSelf: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
    marginBottom: 37,
  },
});

export default Vip;

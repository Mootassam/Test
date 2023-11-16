import React from 'react';
import styles from './styles';
import {View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Images} from '../../../config/images';
import {launchImageLibrary} from 'react-native-image-picker';
// @ts-config
import Icon from 'react-native-vector-icons/FontAwesome5'; // You can choose a different icon library if you prefer
import Button from '../../components/Button';

import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
const options = {
  title: 'Select Avatar',
  customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
function Payment(props: any) {
  const {navigation} = props;
  const [imageSource, setImageSource] = React.useState();
  // @ts-ignore
  console.log(imageSource);
  
  const handleGalleryClick = () => {
    // @ts-ignore

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
        // @ts-ignore
      } else if (response.error) {
        // @ts-ignore

        console.log('ImagePicker Error: ', response.error);
        // @ts-ignore
      } else if (response.customButton) {
        // @ts-ignore

        console.log('User tapped custom button: ', response.customButton);
      } else {
        // @ts-ignore

        const source = {uri: response.uri};
        // @ts-ignore

        setImageSource(source);
      }
    });
  };
  return (
    <View style={styles.content}>
      <ScrollView>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
          }}>
          <FastImage
            source={Images.qrcode}
            style={{width: 230, height: 230, alignSelf: 'center'}}
            resizeMode={FastImage.resizeMode.contain}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: 4,
              columnGap: 9,
            }}>
            <Text style={{display: 'flex', fontSize: 15, color: 'black'}}>
              https://www.instagram.c
            </Text>
            <TouchableOpacity activeOpacity={0.9}>
              <View
                style={{
                  display: 'flex',
                  backgroundColor: 'black',
                  width: 15,
                  height: 15,
                }}></View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.detaillRecharge}>
          <Text style={styles.title}>Detail Recharge</Text>
          <View style={{display: 'flex', flexDirection: 'column', rowGap: 13}}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text>The Amount</Text>
              <Text>USDT 111.46</Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text>Request Number</Text>
              <Text>2023111611340445377</Text>
            </View>

            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text>Upload The Screen Shot</Text>
              <TouchableOpacity
                style={{
                  width: 330,
                  height: 200,
                  backgroundColor: 'white',
                  borderWidth: 1,
                  marginTop: 12,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={handleGalleryClick}
                activeOpacity={0.9}>
                {imageSource ? (
                  <FastImage
                    source={imageSource}
                    style={{width: 200, height: 200}}
                  />
                ) : (
                  <Icon name="image" size={80} />
                )}
              </TouchableOpacity>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text>HASH/TXID</Text>
              <TextInput placeholder="Enter The Transaction ID" />
            </View>

            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text>Payment Time</Text>
              <Text>2023-11-16 05:05:45</Text>
            </View>
          </View>

          <Button text="Send" />
        </View>
      </ScrollView>
    </View>
  );
}

export default Payment;
function setSelectedImage(imageUri: any) {
  throw new Error('Function not implemented.');
}

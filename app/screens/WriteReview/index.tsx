import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';
import {Rating} from 'react-native-ratings';
import {TouchableOpacity} from 'react-native-gesture-handler';

function WriteReview(props: any) {
  const {navigation} = props;
  return (
    <>
      <View style={styles.content}>
        <Text style={styles.review}>What do you think ?</Text>
        <Text style={styles.smalldescription}>
          please give your rating by clicking on the stars below
        </Text>

        <Rating
          type="star"
          ratingCount={5}
          imageSize={50}
          ratingBackgroundColor="transparent"
          style={{backgroundColor: 'transparent'}}
        />
        <TextInput
          style={styles.textInput}
          multiline
          numberOfLines={10}
          placeholder="Tell us about your experience"
        />
      </View>

      <View style={styles.background}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('WriteReview')}>
          <View style={styles.startRating}>
            <Text style={styles.reviewButton}> Leave a review today</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default WriteReview;

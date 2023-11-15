import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './styles';
// @ts-ignore
function Categories({navigation}) {
  const categories = [
    'Vegetables',
    'Fruits',
    'Beverages',
    'Grocery',
    'Edible oil',
    'Household',
    'Babycare',
  ];

  const handleCategoryPress = (item: string) => {
    navigation.navigate('CategoriesDetail', {title: item});
  };

  return (
    <View style={styles.boxCategory}>
      {categories.map(item => (
        <TouchableWithoutFeedback
          key={item}
          onPress={() => handleCategoryPress(item)}>
          <View style={styles.singleCategory}>
            <View style={styles.circle}></View>
            <Text style={styles.text}>{item}</Text>
          </View>
        </TouchableWithoutFeedback>
      ))}
    </View>
  );
}

export default Categories;

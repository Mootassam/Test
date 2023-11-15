import React, {useLayoutEffect} from 'react';
import {View, Text} from 'react-native';
import ListProduct from '../../components/ListProduct';
import {ScrollView} from 'react-native-gesture-handler';
// @ts-ignore
const CategoriesDetail = ({route, navigation}) => {
  const {title} = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: title, // Set the header title dynamically
    });
  }, [navigation, title]);

  return (
    <ScrollView
      style={{
        paddingTop: 17,
        paddingLeft: 17,
        paddingRight: 17,
        marginBottom: 17,
      }}>
      <ListProduct navigation={navigation} />
      <Text>CategoriesDetaill {title}</Text>
    </ScrollView>
  );
};

export default CategoriesDetail;

import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import SingleProduct from '../SingleProduct';
// @ts-ignore
function ListProduct(props: any) {
  return (
    <View style={styles.listProduct}>
      {Array.from({length: 6}).map(() => (
        <SingleProduct {...props} />
      ))}
    </View>
  );
}

export default ListProduct;

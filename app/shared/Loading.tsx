import React from 'react';
import {View, ActivityIndicator, StyleSheet, Text} from 'react-native';

function Loadings() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#007AFF" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Loadings;

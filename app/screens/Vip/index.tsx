import React from 'react';
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  Modal,
  Alert,
  Pressable,
  Text,
} from 'react-native';
import {Images} from '../../../config/images';
import styles from './styles';
const Vip = () => {
  const [modalVisible, setModalVisible] = React.useState(false);

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
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Are you sure To get The VIP</Text>

            <View style={{display: 'flex', flexDirection: 'row', gap: 10}}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Yes</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>No</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {vipImages.map((image, index) => (
          <Pressable onPress={() => setModalVisible(true)}>
            <Image
              key={index}
              source={image}
              style={styles.image}
              resizeMode="contain"
            />
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default Vip;

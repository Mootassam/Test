import React, {useState} from 'react';
import {View, Text, Image, Alert} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5'; // You can choose a different icon library if you prefer
import {Images} from '../../../config/images';
import {useSelector} from 'react-redux';
import authSelectors from '../../modules/auth/authSelectors';
import Dates from '../../shared/Dates';
import {SafeAreaView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {downloadFile} from '../../shared/Download';
function Home(props: any) {
  const {navigation} = props;
  const currentUser = useSelector(authSelectors.selectCurrentUser);
  const [url, setUrl] = useState(currentUser.passportDocument[0].downloadUrl);
  const [image, setImage] = useState(currentUser.passportPhoto[0].downloadUrl || Images.user);

  console.log(image);

  const paymentSucess = () => {
    return (
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          gap: 5,
        }}>
        <Icon name="check-circle" size={15} color={'green'} />
        <Text style={{color: 'green'}}>Payment Success</Text>
      </View>
    );
  };

  const Unpaid = () => {
    return (
      <View style={{display: 'flex'}}>
        <Text style={{color: 'orange'}}>Unpaid</Text>
      </View>
    );
  };

  const disableItem = () => {
    Alert.alert('Your document is still being prepared...');
  };

  const downloadItem = () => {
    if (url) {
      return (
        <TouchableOpacity onPress={() => downloadFile(url)}>
          <Icon name="download" color={'#a2703d'} size={24} />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity onPress={() => disableItem()}>
          <Icon name="download" color={'#CCCCCC'} size={24} />
        </TouchableOpacity>
      );
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.ViewTop}>
        <View style={styles.ViewMeduim}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={styles.circleView}>
              <Image
                source={{uri:image}}
                style={{width: '100%', height: '100%', borderRadius: 50}}
                resizeMode="center"
              />
              <View style={styles.smallCircle}>
                <Icon name="check" color={'white'} size={14} />
              </View>
            </View>
            <View
              style={{
                paddingRight: 25,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 2,
              }}>
              {downloadItem()}
            </View>
          </View>
          <View style={{paddingLeft: 20}}>
            <Text style={{color: '#000704', fontSize: 20}}>
              {currentUser?.fullName}
            </Text>
            <Text style={{color: '#369676', fontSize: 16}}>
              <Icon name="check-circle" color={'#1EA073'} size={15} /> Verified
              Account
            </Text>
          </View>

          <View
            style={{
              position: 'absolute',
              bottom: 10,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              width: '100%',
            }}>
            <View style={{display: 'flex', flexDirection: 'row', gap: 9}}>
              <Icon name="calendar-week" color={'green'} size={29} />
              <View>
                <Text>Date Applied:</Text>
                <Text style={{fontSize: 12, color: 'black'}}>
                  {Dates.Date(currentUser?.createdAt)}
                </Text>
              </View>
            </View>
            <View style={{display: 'flex', flexDirection: 'row', gap: 9}}>
              <Icon name="passport" color={'green'} size={29} />
              <View>
                <Text>Passport Number:</Text>
                <Text style={{fontSize: 12, color: 'black'}}>
                  {currentUser?.passportNumber}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.validation}>
        <View style={styles.approved}>
          <View>
            <Text style={{fontSize: 16, color: 'black'}}>Visa Details:</Text>
            <View style={{paddingTop: 16, display: 'flex', gap: 3}}>
              <Text>
                <Text style={{fontWeight: '600'}}>Visa Type: </Text>{' '}
                {currentUser?.couponId?.title}
              </Text>
              <Text>
                <Text style={{fontWeight: '600'}}>Stay Duration: </Text>{' '}
                {currentUser?.couponId?.noOfTimes}
              </Text>
              <Text>
                <Text style={{fontWeight: '600'}}>Visa Start: </Text>
                {Dates.Date(currentUser?.visastart)}
              </Text>
              <Text>
                <Text style={{fontWeight: '600'}}>Visa Expiry:</Text>
                {Dates.Date(currentUser?.visaend)}
              </Text>
            </View>
          </View>

          <View>
            <Text style={{fontSize: 16, color: 'black'}}>
              Payment Information:
            </Text>
            <View style={{paddingTop: 16, display: 'flex', gap: 3}}>
              <Text>
                <Text style={{fontWeight: '600'}}>Total Visa Fee:</Text>{' '}
                {currentUser?.couponId?.discount}
              </Text>
              <View
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'row',
                  gap: 10,
                }}>
                <Text style={{fontWeight: '600'}}>Payment Status:</Text>
                {currentUser.payee === true ? paymentSucess() : Unpaid()}
              </View>
              <Text>
                <Text style={{fontWeight: '600'}}>Payment Method: </Text>[Credit
                Card/Debit Card]
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default React.memo(Home);

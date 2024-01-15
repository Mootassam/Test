import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5'; // You can choose a different icon library if you prefer
import {Images} from '../../../config/images';
import {useSelector} from 'react-redux';
import authSelectors from '../../modules/auth/authSelectors';
import Dates from '../../shared/Dates';

function Home(props: any) {
  const {navigation} = props;
  const currentUser = useSelector(authSelectors.selectCurrentUser);
  console.log('====================================');
  console.log(currentUser);
  console.log('====================================');
  return (
    <View>
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
                source={Images.user}
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
              <Icon name="download" color={'#a2703d'} size={24} />
            </View>
          </View>
          <View style={{paddingLeft: 20}}>
            <Text style={{color: '#000704', fontSize: 20}}>
              {currentUser.fullName}
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
                  {Dates.Date(currentUser.createdAt)}
                </Text>
              </View>
            </View>
            <View style={{display: 'flex', flexDirection: 'row', gap: 9}}>
              <Icon name="passport" color={'green'} size={29} />
              <View>
                <Text>Passport Number:</Text>
                <Text style={{fontSize: 12, color: 'black'}}>
                  {currentUser.passportNumber}
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
                <Text style={{fontWeight: '600'}}>Visa Type: </Text> [Type of
                Visa]
              </Text>
              <Text>
                <Text style={{fontWeight: '600'}}>Stay Duration: </Text>[Number
                of days/months]
              </Text>
              <Text>
                <Text style={{fontWeight: '600'}}>Visa Start: </Text>
                {Dates.Date(currentUser.visastart)}
              </Text>
              <Text>
                <Text style={{fontWeight: '600'}}>Visa Expiry:</Text>
                {Dates.Date(currentUser.visaend)}
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
                [Amount]
              </Text>
              <Text>
                <Text style={{fontWeight: '600'}}>Payment Status:</Text>{' '}
                [Paid/Unpaid]
              </Text>
              <Text>
                <Text style={{fontWeight: '600'}}>Payment Method: </Text>[Credit
                Card/Debit Card]
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Home;

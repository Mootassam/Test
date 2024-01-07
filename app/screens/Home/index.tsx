import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5'; // You can choose a different icon library if you prefer
import {Images} from '../../../config/images';

function Home(props: any) {
  const {navigation} = props;

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
              <View style={styles.smallCircle}>
                <Icon name="check" color={'white'} size={14} />
              </View>
            </View>
            <View style={{paddingRight: 25}}>
              <Text>Visa 2 Months</Text>
            </View>
          </View>
          <View style={{paddingLeft: 20}}>
            <Text style={{color: '#000704', fontSize: 20}}>
              Goafucheng Is the best
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
                <Text style={{fontSize: 12, color: 'black'}}>24/03/2023</Text>
              </View>
            </View>
            <View style={{display: 'flex', flexDirection: 'row', gap: 9}}>
              <Icon name="passport" color={'green'} size={29} />
              <View>
                <Text>Passport Number:</Text>
                <Text style={{fontSize: 12, color: 'black'}}>1423465987</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.validation}>
        <View style={styles.approved}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Icon name="plane-departure" size={30} style={{paddingRight: 13}} />
            <View>
              <Text style={{fontSize: 11}}>Issuing Date</Text>
              <Text style={{color: 'black'}}>01/06/2024</Text>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Icon name="plane-arrival" size={30} style={{paddingRight: 13}} />
            <View>
              <Text style={{fontSize: 11}}>Expiry Date</Text>
              <Text style={{color: 'black'}}>01/06/2024</Text>
            </View>
          </View>
        </View>
      </View>

      <View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
          }}>
          <Text
            style={{
              color: 'black',
              paddingTop: 20,
              position: 'relative',
              left: 0,
            }}></Text>
          <View
            style={{
              backgroundColor: 'white',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'baseline',
              gap: 10,
              padding: 20,
              width: '90%',
              borderRadius: 10,
            }}>
            <Icon name="download" size={24} color={'green'} />
            <Text style={{color: '#000704', fontSize: 16}}>
              {' '}
              Download Visa Document
            </Text>
          </View>
        </View>

        
      </View>
    </View>
  );
}

export default Home;

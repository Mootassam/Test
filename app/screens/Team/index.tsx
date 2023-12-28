import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import {Images} from '../../../config/images';
function Team() {
  return (
    <View style={styles.content}>
      <View style={styles.boxContent}>
        <Text style={styles.invitationLink}>Invitaion Link</Text>
        <View
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Text style={styles.link}>
            https://www.comcantabria.es/register/inviatationcode="15874"
          </Text>
          <View style={styles.copyLink}>
            <Text> Copy Link </Text>
          </View>
        </View>

        <View style={styles.sharelinks}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 10,
            }}>
            <FastImage
              source={Images.whatsapp}
              resizeMode={FastImage.resizeMode.contain}
              style={{width: 50, height: 50}}
            />
            <Text style={styles.textwhite}>WhatsApp</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 10,
            }}>
            <FastImage
              source={Images.telegram}
              resizeMode={FastImage.resizeMode.contain}
              style={{width: 50, height: 50}}
            />
            <Text style={styles.textwhite}>Telegram</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 10,
            }}>
            <FastImage
              source={Images.email}
              resizeMode={FastImage.resizeMode.contain}
              style={{width: 50, height: 50}}
            />
            <Text style={styles.textwhite}>Email</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 10,
            }}>
            <FastImage
              source={Images.sms}
              resizeMode={FastImage.resizeMode.contain}
              style={{width: 50, height: 50}}
            />
            <Text style={styles.textwhite}>SMS</Text>
          </View>
        </View>
      </View>

      <View style={styles.earning}>
        <View style={styles.teamsize}>
          <View style={styles.detaillfinance}>
            <Text style={styles.teamnumber}>30</Text>
            <Text>Earning Today </Text>
          </View>
          <View style={styles.detaillfinance}>
            <Text style={styles.teamnumber}>90</Text>
            <Text>Recharge the team</Text>
          </View>
          <View style={styles.detaillfinance}>
            <Text style={styles.teamnumber}>60</Text>
            <Text>Withdrawal team</Text>
          </View>
        </View>

        <View style={styles.teamsize}>
          <View style={styles.detaillteam}>
            <Text style={styles.teamnumber}>30</Text>
            <Text>Team size</Text>
          </View>
          <View style={styles.detaillteam}>
            <Text style={styles.teamnumber}>90</Text>
            <Text>Recharge the team</Text>
          </View>
          <View style={styles.detaillteam}>
            <Text style={styles.teamnumber}>60</Text>
            <Text>Withdrawal team</Text>
          </View>
        </View>
      </View>
      <View style={styles.boxContent}>
        <View style={styles.dashboard}>
          <View style={styles.teamsize}>
            <View style={styles.detaillteam}>
              <Text style={styles.teamnumber}>30</Text>
              <Text>Team size</Text>
            </View>
            <View style={styles.detaillteam}>
              <Text style={styles.teamnumber}>90</Text>
              <Text>Recharge the team</Text>
            </View>
            <View style={styles.detaillteam}>
              <Text style={styles.teamnumber}>60</Text>
              <Text>Withdrawal team</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Team;

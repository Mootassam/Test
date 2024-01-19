import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5'; // You can choose a different icon library if you prefer
import {useSelector} from 'react-redux';
import authSelectors from '../../modules/auth/authSelectors';
import Dates from '../../shared/Dates';

function UpdateProfile() {
  const currentUser = useSelector(authSelectors.selectCurrentUser);

  return (
    <View style={styles.content}>
      <View>
        <Text style={styles.title}>Personal Details</Text>
        <View style={styles.details}>
          <View style={styles.singleDetail}>
            <Icon name="user-circle" size={22} />
            <TextInput value={currentUser.fullName} editable={false} />
          </View>
          <View style={styles.singleDetail}>
            <Icon name="envelope" size={20} />
            <TextInput keyboardType="email-address" value={currentUser.email}  editable={false} />
          </View>
          <View style={styles.singleDetail}>
            <Icon name="phone" size={20} />
            <TextInput value={currentUser.phoneNumber}  editable={false} />
          </View>
          <View style={styles.singleDetail}>
            <Icon name="birthday-cake" size={20} />
            <TextInput value={Dates.Date(currentUser.bearthday)}  editable={false} />
          </View>
          <View style={styles.singleDetail}>
            <Icon name="flag" size={20} />
            <TextInput value={currentUser.nationality}  editable={false} />
          </View>
          <View style={styles.singleDetail}>
            <Icon name="globe" size={20} />
            <TextInput value={currentUser.country}  editable={false} />
          </View>
          <View style={styles.singleDetail}>
            <Icon name="map-marker-alt" size={20}  />
            <TextInput value={currentUser.state}   editable={false}/>
          </View>
        </View>
      </View>
    </View>
  );
}

export default React.memo(UpdateProfile);

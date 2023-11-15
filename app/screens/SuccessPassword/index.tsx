import {View, Text, Image} from 'react-native';
import {Images} from '../../../config/images';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
function SuccessPassword(props: any) {
  const {navigation} = props;
  return (
    <View style={styles.LoginComponenet}>
      <View style={styles.successImage}>
        <Image source={Images.success} />
        <Text style={styles.textWelcome}>Password Changed!</Text>
        <Text style={styles.forgetPassword}>
          Your password has been changed successfully.{' '}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.Login}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.textLogin}>Back to login</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SuccessPassword;

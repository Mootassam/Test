// import AwesomeAlert from "react-native-awesome-alerts";
import {ToastAndroid} from 'react-native';

export default class Message {
  static success(arg: any) {
    ToastAndroid.show(arg, ToastAndroid.SHORT);
  }
  static error(arg: any) {
    ToastAndroid.show(arg, ToastAndroid.LONG);
  }
}

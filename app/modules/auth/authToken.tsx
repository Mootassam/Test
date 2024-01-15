import AsyncStorage from '@react-native-async-storage/async-storage';

let inMemoryToken: null = null;
export default class AuthToken {
  static async get() {
    return inMemoryToken || (await AsyncStorage.getItem('jwt')) || null;
  }

  static set(token: any, rememberMe: any) {
    if (rememberMe) {
      AsyncStorage.setItem('jwt', token || '');
    } else {
      inMemoryToken = token;
      AsyncStorage.setItem('jwt', '');
    }
  }


}

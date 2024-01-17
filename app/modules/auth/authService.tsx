import authAxios from '../shared/axios/authAxios';
import AuthToken from './authToken';

export default class AuthService {
  static async registerWithEmailAndPassword(
    email: any,
    phoneNumber: any,
    country: any,
    password: any,
  ) {
    const response = await authAxios.post('/auth/sign-up', {
      email,
      password,
      phoneNumber,
      country,
    });
    return response.data;
  }

  static async signinWithEmailAndPassword(email: any, password: any) {
    const response = await authAxios.post('/auth/sign-in', {
      email,
      password,
    });
    return response.data;
  }

  static async fetchMe() {
    const response = await authAxios.get('/auth/me');
    return response.data;
  }

  static signout() {
    AuthToken.set(null, '');
  }
  static async updateProfile(data: any) {
    const body = {
      data,
    };
    const response = await authAxios.put('/auth/profile', body);
    return response.data;
  }

  static async changePassword(oldPassword: any, newPassword: any) {
    const body = {
      oldPassword,
      newPassword,
    };
    const response = await authAxios.put('/auth/change-password', body);
    return response.data;
  }
}

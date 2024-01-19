import Axios from 'axios';
import AuthToken from '../../auth/authToken';

const authAxios = Axios.create({
  baseURL: 'https://f2d1-83-110-151-155.ngrok-free.app/api',
});

authAxios.interceptors.request.use(
  async function (options) {
    const token = await AuthToken.get();

    if (token) {
      options.headers['Authorization'] = `Bearer ${token}`;
    }

    return options;
  },
  function (error) {
    console.log('Request error: ', error);
    return Promise.reject(error);
  },
);

export default authAxios;

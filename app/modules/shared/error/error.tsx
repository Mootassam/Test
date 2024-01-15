import authService from '../../../modules/auth/authService';
import Message from '../../../shared/Message';
import RNRestart from 'react-native-restart';

const DEFAULT_ERROR_MESSAGE = 'Ops, an error occurred';

function selectErrorKeyOrMessage(error: {response: {data: any}; message: any}) {
  if (error && error.response && error.response.data) {
    const data = error.response.data;

    if (data.error && data.error.message) {
      return data.error.message;
    }
    return String(data);
  }

  return error.message || DEFAULT_ERROR_MESSAGE;
}

function selectErrorMessage(error: any) {
  const key = selectErrorKeyOrMessage(error);

  if (key) {
    return key;
  }

  return key;
}

function selectErrorCode(error: {response: {status: any}}) {
  if (error && error.response && error.response.status) {
    return error.response.status;
  }

  return 500;
}

export default class Errors {
  static handle(error: any) {
    console.error(selectErrorMessage(error));
    console.error(error);

    if (selectErrorCode(error) === 401) {
      authService.signout();
      RNRestart.Restart();
      return;
    }

    if (selectErrorCode(error) === 403) {
      //       getHistory().push("/403");
      return;
    }

    if ([400, 429].includes(selectErrorCode(error))) {
      Message.error(
        selectErrorMessage('Trop de demandes. Veuillez réessayer plus tard'),
      );
      return;
    }

    //     getHistory().push("/500");
  }

  static errorCode(error: any) {
    return selectErrorCode(error);
  }

  static selectMessage(error: any) {
    return selectErrorMessage(error);
  }

  static showMessage(error: any) {
    Message.error(selectErrorMessage(error));
  }
}

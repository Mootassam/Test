import Message from '../../shared/Message';
import Errors from '../shared/error/error';
import {
  setAuthError,
  setAuthStart,
  setAuthSuccess,
  setErrorChangePassword,
  setErrorMessageCleared,
  setErrorRefreshCurrentUser,
  setInitError,
  setInitSuccess,
  setRefreshCurrentUser,
  setStartChangePassword,
  setSuccessChangePasswrod,
} from './authReducers';
import AuthService from './authService';
import AuthToken from './authToken';
import {Dispatch} from 'redux';
const authActions = {
  doSigninWithEmailAndPassword:
    (email: any, password: any) => async (dispatch: Dispatch<any>) => {
      try {
        let currentUser = null;
        dispatch(setAuthStart(true));
        const token = await AuthService.signinWithEmailAndPassword(
          email,
          password,
        );
        await AuthToken.set(token, true);
        currentUser = await AuthService.fetchMe();
        dispatch(setAuthSuccess(currentUser));
      } catch (error) {
        if (Errors.errorCode(error) !== 400) {
          Errors.handle(error);
        }
        await AuthService.signout();
        dispatch(setAuthError(Errors.selectMessage(error)));
      }
    },
  doRegisterEmailAndPassword:
    (email: any, phoneNumber: any, country: any, password: any) =>
    async dispatch => {
      try {
        let currentUser = null;
        dispatch(setAuthStart(true));
        const token = await AuthService.registerWithEmailAndPassword(
          email,
          phoneNumber,
          country,
          password,
        );
        AuthToken.set(token, true);
        currentUser = await AuthService.fetchMe();
        dispatch(setAuthSuccess(currentUser));
      } catch (error) {
        await AuthService.signout();
        if (Errors.errorCode(error) !== 400) {
          Errors.handle(error);
        }
        dispatch(setAuthError(Errors.selectMessage(error)));
      }
    },
  doSignout: () => async dispatch => {
    try {
      dispatch(setAuthStart(true));
      await AuthService.signout();
      dispatch(setAuthSuccess(null));
    } catch (error) {
      Errors.handle(error);
      dispatch(setAuthError(null));
    }
  },
  doInit: () => async dispatch => {
    try {
      const token = await AuthToken.get();
      let currentUser = null;
      if (token !== null) {
        currentUser = await AuthService.fetchMe();
      }
      dispatch(setInitSuccess(currentUser));
    } catch (error) {
      AuthService.signout();
      Errors.handle(error);
      dispatch(setInitError(null));
    }
  },
  doRefreshCurrentUser: () => async dispatch => {
    try {
      let currentUser = null;
      const token = await AuthToken.get();
      if (token) {
        currentUser = await AuthService.fetchMe();
      }
      await dispatch(setRefreshCurrentUser(currentUser));
    } catch (error) {
      AuthService.signout();
      Errors.handle(error);
      await dispatch(setErrorRefreshCurrentUser(null));
    }
  },
  doChangePassword: (oldPassword: any, newPassword: any) => async dispatch => {
    try {
      dispatch(setStartChangePassword(true));
      await AuthService.changePassword(oldPassword, newPassword);
      dispatch(setSuccessChangePasswrod(false));
      Message.success('Password was successfully changed');
      await dispatch(authActions.doRefreshCurrentUser());
    } catch (error) {
      dispatch(setErrorChangePassword(false));
      Message.error(Errors.selectMessage(error));
    }
  },

  doClearErrorMessage: () => async dispatch => {
    await dispatch(setErrorMessageCleared(null));
  },
};
export default authActions;

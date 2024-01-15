import Message from '../../shared/Message';
import Errors from '../shared/error/error';
import AuthCurrentTenant from './authCurrentTenant';
import {
  setCurrentTenant,
  setCurrentUser,
  setErrorMessage,
  setLoading,
  setLoadingChangingPassowrd,
  setLoadingInit,
} from './authReducers';
import AuthService from './authService';
import AuthToken from './authToken';
import {Dispatch} from 'redux';

const authActions = {
  doSigninWithEmailAndPassword:
    (email: any, password: any) => async (dispatch: Dispatch<any>) => {
      try {
        let currentUser = null;
        dispatch(setLoading(true));
        const token = await AuthService.signinWithEmailAndPassword(
          email,
          password,
        );
        await AuthToken.set(token, true);
        currentUser = await AuthService.fetchMe();
        dispatch(setCurrentUser(currentUser));
        dispatch(
          setCurrentTenant(
            AuthCurrentTenant.selectAndSaveOnStorageFor(currentUser),
          ),
        );
        dispatch(setLoading(false));
      } catch (error) {
        if (Errors.errorCode(error) !== 400) {
          Errors.handle(error);
        }
        await AuthService.signout();
        dispatch(setErrorMessage(Errors.selectMessage(error)));
        dispatch(setLoading(false));
        Message.error(Errors.selectMessage(error));
      }
    },

  doRegisterEmailAndPassword: (email: any, password: any) => async dispatch => {
    try {
      let currentUser = null;
      dispatch(setLoading(true));
      const token = await AuthService.registerWithEmailAndPassword(
        email,
        password,
      );
      AuthToken.set(token, true);
      currentUser = await AuthService.fetchMe();
      dispatch(setLoading(false));
    } catch (error) {
      await AuthService.signout();
      if (Errors.errorCode(error) !== 400) {
        Errors.handle(error);
      }
      dispatch(setErrorMessage(Errors.selectMessage(error)));
      dispatch(setLoading(false));
      Message.error(Errors.selectMessage(error));
    }
  },

  doSignout: () => async dispatch => {
    try {
      await AuthService.signout();
      dispatch(setCurrentUser(null));
    } catch (error) {
      Errors.handle(error);
    }
  },

  doInit: () => async dispatch => {
    try {
      const token = AuthToken.get();
      let currentUser = null;
      if (token !== null) {
        currentUser = await AuthService.fetchMe();
      }
      dispatch(setCurrentUser(currentUser));
      dispatch(
        setCurrentTenant(
          AuthCurrentTenant.selectAndSaveOnStorageFor(currentUser),
        ),
      );
    } catch (error) {
      AuthService.signout();
      Errors.handle(error);
      dispatch(setCurrentUser(null));
      dispatch(setCurrentTenant(null));
      dispatch(setLoadingInit(false));
    }
  },
  doRefreshCurrentUser: () => async dispatch => {
    try {
      let currentUser = null;
      const token = await AuthToken.get();
      if (token) {
        currentUser = await AuthService.fetchMe();
      }
      dispatch(setCurrentUser(currentUser || null));
      dispatch(
        setCurrentTenant(
          AuthCurrentTenant.selectAndSaveOnStorageFor(currentUser),
        ),
      );
    } catch (error) {
      AuthService.signout();
      Errors.handle(error);
      dispatch(setCurrentUser(setCurrentUser(null)));
      dispatch(
        setCurrentTenant(AuthCurrentTenant.selectAndSaveOnStorageFor(null)),
      );
    }
  },

  doChangePassword: (oldPassword: any, newPassword: any) => async dispatch => {
    try {
      setLoadingChangingPassowrd(true);
      await AuthService.changePassword(oldPassword, newPassword);
      setLoadingChangingPassowrd(false);
      await dispatch(authActions.doRefreshCurrentUser());
      Message.success('Password was successfully changed');
    } catch (error) {
      setLoadingChangingPassowrd(false);
      Message.error(Errors.selectMessage(error));
    }
  },
};
export default authActions;

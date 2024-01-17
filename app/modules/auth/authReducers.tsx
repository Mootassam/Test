import {createSlice} from '@reduxjs/toolkit';
import AuthCurrentTenant from './authCurrentTenant';

const authReducers = createSlice({
  name: 'auth',
  initialState: {
    currentUser: null,
    currentTenant: null,
    loading: false,
    errorMessage: null,
    loadingInit: true,
    loadingChangePassword: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setAuthStart: (state, action) => {
      return {
        ...state,
        loading: action.payload,
        errorMessage: null,
      };
    },

    setAuthSuccess: (state, action) => {
      return {
        ...state,
        currentUser: action.payload || null,
        currentTenant: AuthCurrentTenant.selectAndSaveOnStorageFor(
          action.payload,
        ),
        errorMessage: null,
        loading: false,
      };
    },

    setAuthError: (state, action) => {
      return {
        ...state,
        loading: false,
        currentTenant: null,
        currentUser: null,
        errorMessage: action.payload || null,
      };
    },

    setStartChangePassword: (state, action) => {
      return {
        ...state,
        loadingChangePassword: true,
      };
    },
    setSuccessChangePasswrod: (state, action) => {
      return {
        ...state,
        loadingChangePassword: false,
      };
    },
    setErrorChangePassword: (state, action) => {
      return {
        ...state,
        loadingChangePassword: false,
      };
    },

    setRefreshCurrentUser: (state, action) => {
      return {
        ...state,
        currentUser: action.payload || null,
        currentTenant: AuthCurrentTenant.selectAndSaveOnStorageFor(
          action.payload,
        ),
      };
    },

    setErrorRefreshCurrentUser: (state, action) => {
      return {
        ...state,
        currentUser: null,
        currentTenant: AuthCurrentTenant.selectAndSaveOnStorageFor(null),
      };
    },

    setErrorMessageCleared: (state, action) => {
      return {
        ...state,
        errorMessage: null,
      };
    },

    setInitSuccess: (state, action) => {
      return {
        ...state,
        currentUser: action.payload || null,
        currentTenant: AuthCurrentTenant.selectAndSaveOnStorageFor(
          action.payload,
        ),
        loadingInit: false,
      };
    },
    setInitError: (state, action) => {
      return {
        ...state,
        currentUser: null,
        currentTenant: null,
        loadingInit: false,
      };
    },
  },
});

export const {
  setStartChangePassword,
  setSuccessChangePasswrod,
  setErrorChangePassword,
  setRefreshCurrentUser,
  setErrorMessageCleared,
  setErrorRefreshCurrentUser,
  setInitSuccess,
  setInitError,
  setAuthStart,
  setAuthSuccess,
  setAuthError,
} = authReducers.actions;

export default authReducers.reducer;

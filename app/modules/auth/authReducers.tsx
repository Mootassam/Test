import {createSlice} from '@reduxjs/toolkit';

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
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    setErrorMessage(state, action) {
      state.errorMessage = action.payload;
    },
    setLoadingInit(state, action) {
      state.loadingInit = action.payload;
    },
    setLoadingChangingPassowrd(state, action) {
      state.loadingChangePassword = action.payload;
    },
    setCurrentTenant(state, action) {
      state.currentTenant = action.payload;
    },
  },
});

export const {
  setLoading,
  setCurrentUser,
  setErrorMessage,
  setLoadingInit,
  setLoadingChangingPassowrd,
  setCurrentTenant,
} = authReducers.actions;

export default authReducers.reducer;

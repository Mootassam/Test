import {createSelector} from 'reselect';
const selectRaw = state => state.auth;

const selectCurrentUser = createSelector([selectRaw], auth => auth.currentUser);
const selectLoading = createSelector([selectRaw], auth => auth.loading);

const errorMessage = createSelector([selectRaw], auth => auth.errorMessage);
const loadingInit = createSelector([selectRaw], auth => auth.loadingInit);
const loadingChangePassword = createSelector(
  [selectRaw],
  auth => auth.loadingChangePassword,
);
const currentTenant = createSelector([selectRaw], auth => auth.currentTenant);
export default {
  selectCurrentUser,
  selectLoading,
  errorMessage,
  loadingInit,
  loadingChangePassword,
  currentTenant,
};

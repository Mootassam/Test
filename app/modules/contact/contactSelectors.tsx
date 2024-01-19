import {createSelector} from 'reselect';
const selectRaw = state => state.contact;
const loading = createSelector([selectRaw], contact => contact.loading);
const record = createSelector([selectRaw], contact => contact.record);
export default {loading, record};

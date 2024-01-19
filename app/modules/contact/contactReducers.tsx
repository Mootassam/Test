import {createSlice} from '@reduxjs/toolkit';

const contactReducers = createSlice({
  name: 'contact',
  initialState: {
    loading: false,
    record: [],
  },
  reducers: {
    setFetchContact: (state, action) => {
      return {...state, loading: true};
    },
    setSuccessContact: (state, action) => {
      return {...state, loading: false, record: action.payload};
    },
    setErrorContact: (state, action) => {
      return {...state, loading: false, record: []};
    },
  },
});

export const {setFetchContact, setSuccessContact, setErrorContact} =
  contactReducers.actions;
export default contactReducers.reducer;

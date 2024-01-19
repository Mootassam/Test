import Errors from '../shared/error/error';
import {
  setErrorContact,
  setFetchContact,
  setSuccessContact,
} from './contactReducers';
import contactService from './contactService';

const contactActions = {
  doFetch: () => async (dispatch, getState) => {
    try {
      dispatch(setFetchContact(null));
      const response = await contactService.list();
      dispatch(setSuccessContact(response.rows));
    } catch (error) {
      Errors.handle(error);
      dispatch(setErrorContact([]));
    }
  },
};
export default contactActions;

import { SET_AUTHENTICATED } from '../types';

export const getUser = () => (dispatch) => {
  dispatch({
    type: SET_AUTHENTICATED,
  });
};

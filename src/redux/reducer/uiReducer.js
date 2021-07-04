import {
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  STOP_UI_LOADING,
} from '../types';

const initialState = {
  loading: false,
  errors: null,
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_ERRORS:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        loading: false,
        errors: null,
      };
    case LOADING_UI:
      return {
        ...state,
        loading: true,
      };
    case STOP_UI_LOADING:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}

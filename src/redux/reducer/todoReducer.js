import {
  SET_TODOS,
  LOADING_DATA,
  DELETE_TODO,
  POST_TODOS,
  EDIT_TODO,
} from '../types';

const initialState = {
  todos: [],
  loading: false,
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      };
    case SET_TODOS:
      return {
        ...state,
        loading: false,
        todos: action.payload,
      };
    case POST_TODOS:
      return {
        todos: [action.payload, ...state.todos],
      };
    case EDIT_TODO:
      const findIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todos[findIndex] = action.payload;
      return {
        ...state,
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
}

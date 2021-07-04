import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Reducer import
import todoReducer from './reducer/todoReducer';
import uiReducer from './reducer/uiReducer';
import userReducer from './reducer/userReducer';

const initailState = {};

const middleware = [thunk];

const reducers = combineReducers({
  todo: todoReducer,
  UI: uiReducer,
  user: userReducer,
});

const store = createStore(
  reducers,
  initailState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;

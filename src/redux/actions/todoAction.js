import axios from 'axios';
import {
  SET_TODOS,
  LOADING_DATA,
  DELETE_TODO,
  POST_TODOS,
  EDIT_TODO,
} from '../types';

export const getTodos = () => async (dispatch) => {
  dispatch({ type: LOADING_DATA });

  try {
    const res = await axios.get(
      'https://jsonplaceholder.typicode.com/todos?_limit=10'
    );

    dispatch({
      type: SET_TODOS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({ type: SET_TODOS, payload: [] });
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

    dispatch({
      type: DELETE_TODO,
      payload: id,
    });
  } catch (err) {
    console.log(err);
  }
};

export const createTodo = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`https://jsonplaceholder.typicode.com/todos`, {
      data,
    });

    const formatTheData = {
      userId: res.data.data.userId,
      id: res.data.id,
      title: res.data.data.title,
      completed: res.data.data.completed,
    };

    dispatch({
      type: POST_TODOS,
      payload: formatTheData,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateData = (id, data) => async (dispatch) => {
  console.log(data);
  try {
    const res = await axios.patch(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      { data }
    );
    console.log(res.data);

    const formatUpdatedData = {
      userId: res.data.userId,
      id: res.data.id,
      title: res.data.data.title,
      completed: res.data.completed,
    };
    dispatch({
      type: EDIT_TODO,
      payload: formatUpdatedData,
    });
  } catch (err) {
    console.log(err);
  }
};

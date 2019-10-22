import axiosWithAuth from '../utils/axiosWithAuth';
import axios from 'axios';
import * as types from '../actionTypes';

// Register and Login Action Creators
export const register = (credentials, history) => dispatch => {
  dispatch({ type: types.REGISTER });
  axios
    .post('https://wunderlist-2.herokuapp.com/api/auth/register', credentials)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      dispatch({ type: types.REGISTER_SUCCESS, payload: res.data });
      history.push('/todolist');
    })
    .catch(err => {
      dispatch({ type: types.REGISTER_FAILURE, payload: err.response.data });
    });
};

export const login = (credentials, history) => dispatch => {
  dispatch({ type: types.LOGIN });
  axios
    .post('https://wunderlist-2.herokuapp.com/api/auth/login', credentials)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      dispatch({ type: types.LOGIN_SUCCESS, payload: res.data });
      history.push('/todolist');
    })
    .catch(err => {
      dispatch({ type: types.LOGIN_SUCCESS, payload: err.response.data });
    });
};

export const logout = () => {
  localStorage.clear();
  return { type: types.LOGOUT };
};

// Tasks Action Creators
export const getTaskList = () => dispatch => {
  dispatch({ type: types.GET_ALL_TASKS });
  axiosWithAuth()
    .get('api/todos')
    .then(res => {
      debugger;
      dispatch({ type: types.GET_ALL_TASKS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      debugger;
      dispatch({
        type: types.GET_ALL_TASKS_FAILURE,
        payload: err.response.data
      });
    });
};

export const getSingleTask = id => dispatch => {
  dispatch({ type: types.GET_SINGLE_TASK });
  axiosWithAuth()
    .get(`api/todos/${id}`)
    .then(res => {
      debugger;
      dispatch({ type: types.GET_SINGLE_TASK_SUCCESS, payload: res.data });
    })
    .catch(err => {
      debugger;
      dispatch({
        type: types.GET_SINGLE_TASK_FAILURE,
        payload: err.response.data
      });
    });
};

export const addTask = task => dispatch => {
  dispatch({ type: types.ADD_TASK });
  axiosWithAuth()
    .post('api/todos', task)
    .then(res => {
      debugger;
      dispatch({ type: types.ADD_TASK_SUCCESS, payload: res.data });
    })
    .catch(err => {
      debugger;
      dispatch({ type: types.ADD_TASK_FAILURE, payload: err.response.data });
    });
};

export const EditTask = id => dispatch => {
  dispatch({ type: types.UPDATE_TASK });
  axiosWithAuth()
    .put(`api/todos/${id}`)
    .then(res => {
      debugger;
      dispatch({ type: types.UPDATE_TASK_SUCCESS, payload: res.data });
    })
    .catch(err => {
      debugger;
      dispatch({ type: types.UPDATE_TASK_FAILURE, payload: err.response.data });
    });
};

export const deleteTask = id => dispatch => {
  dispatch({ type: types.DELETE_TASK });
  axiosWithAuth()
    .delete(`api/todos/${id}`)
    .then(res => {
      debugger;
      dispatch({ type: types.DELETE_TASK_SUCCESS, payload: res.data });
    })
    .catch(err => {
      debugger;
      dispatch({ type: types.DELETE_TASK_FAILURE, payload: err.response.data });
    });
};

// User Action Creators
export const getUser = id => dispatch => {
  dispatch({ type: types.GET_USER });
  axiosWithAuth()
    .get(`api/users/${id}`)
    .then(res => {
      debugger;
      dispatch({ type: types.GET_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      debugger;
      dispatch({ type: types.GET_USER_FAILURE, payload: err.response.data });
    });
};

export const editUser = id => dispatch => {
  dispatch({ type: types.UPDATE_USER });
  axiosWithAuth()
    .put(`api/users/${id}`)
    .then(res => {
      debugger;
      dispatch({ type: types.UPDATE_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      debugger;
      dispatch({ type: types.UPDATE_USER_FAILURE, payload: err.response.data });
    });
};

export const deleteUser = id => dispatch => {
  dispatch({ type: types.DELETE_USER });
  axiosWithAuth()
    .delete(`api/users/${id}`)
    .then(res => {
      debugger;
      dispatch({ type: types.DELETE_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      debugger;
      dispatch({ type: types.DELETE_USER_FAILURE, payload: err.response.data });
    });
};

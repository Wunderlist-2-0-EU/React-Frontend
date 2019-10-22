import axiosWithAuth from '../utils/axiosWithAuth';
import axios from 'axios';
import * as types from '../actionTypes';

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

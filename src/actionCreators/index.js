import axiosWithAuth from '../utils/axiosWithAuth';
import axios from 'axios';
import * as types from '../actionTypes';

export const register = credentials => dispatch => {
  debugger;
  dispatch({ type: types.REGISTER });
  axios
    .post('https://wunderlist-2.herokuapp.com/api/auth/register', credentials)
    .then(res => {
      debugger;
    })
    .catch(err => {
      debugger;
    });
};

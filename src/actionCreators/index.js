import axiosWithAuth from "../utils/axiosWithAuth";
import axios from "axios";
import * as types from "../actionTypes";

export const register = (credentials, history) => dispatch => {
  // debugger;
  dispatch({ type: types.REGISTER });
  axios
    .post("https://wunderlist-2.herokuapp.com/api/auth/register", credentials)
    .then(res => {
      dispatch({ type: types.REGISTER_SUCCESS, payload: res.data });
      history.push("/login");
      debugger;
    })
    .catch(err => {
      dispatch({ type: types.REGISTER_FAILURE, payload: err });
      debugger;
    });
};

export const login = (credentials, history) => dispatch => {
  dispatch({ type: types.LOGIN });
  axios
    .post("https://wunderlist-2.herokuapp.com/api/auth/login")
    .then(res => {
      // debugger
    })
    .catch(err => {
      // debugger
    });
};

export const addTodo = () => dispatch => {
  dispatch({ type: types.ADD_TASK });
  axiosWithAuth()
    .post("https://wunderlist-2.herokuapp.com/api/todos/")
    .then(res => {
      console.log("response from addtodo", res);
      dispatch({ type: types.ADD_TASK_SUCCESS, payload: res.data.data });
    })
    .catch(err => {
      console.log(err);
      // dispatch(error(err));
    });
};

export const logout = () => {
  localStorage.clear();
  return { type: types.LOGOUT };
};

import axiosWithAuth from "../utils/axiosWithAuth";
import axios from "axios";
import * as types from "../actionTypes";

// Register and Login Action Creators
export const register = (credentials, history) => dispatch => {
  dispatch({ type: types.REQUEST_START });
  axios
    .post("https://wunderlist-2.herokuapp.com/api/auth/register", credentials)
    .then(res => {
      // we need to also store the userID in localStorage because addTodo requires a user_id)
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userID", res.data.userID);
      dispatch({ type: types.REGISTER_SUCCESS, payload: res.data });
      history.push("/todoapp");
    })
    .catch(err => {
      dispatch({ type: types.REGISTER_FAILURE, payload: err.response.data });
    });
};

export const login = (credentials, history) => dispatch => {
  dispatch({ type: types.REQUEST_START });
  axios
    .post("https://wunderlist-2.herokuapp.com/api/auth/login", credentials)
    .then(res => {
      // we need to also store the userID in localStorage because addTodo requires a user_id)
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userID", res.data.userID);
      dispatch({ type: types.LOGIN_SUCCESS, payload: res.data });
      history.push("/todoapp");
    })
    .catch(err => {
      dispatch({ type: types.LOGIN_FAILURE, payload: err.response.data });
    });
};

export const logout = () => {
  localStorage.clear();
  return { type: types.LOGOUT };
};

// Tasks Action Creators
export const getTaskList = () => dispatch => {
  dispatch({ type: types.REQUEST_START });
  // debugger;
  axiosWithAuth()
    .get("api/todos")
    .then(res => {
      // debugger;
      dispatch({ type: types.RESET_DISPLAYED_TASKS, payload: res.data });
      dispatch({ type: types.GET_ALL_TASKS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      // debugger;
      dispatch({
        type: types.GET_ALL_TASKS_FAILURE,
        payload: err.response
      });
    });
};

export const getSingleTask = id => dispatch => {
  dispatch({ type: types.REQUEST_START });
  axiosWithAuth()
    .get(`api/todos/${id}`)
    .then(res => {
      // debugger;
      dispatch({ type: types.GET_SINGLE_TASK_SUCCESS, payload: res.data });
    })
    .catch(err => {
      // debugger;
      dispatch({
        type: types.GET_SINGLE_TASK_FAILURE,
        payload: err.response.data
      });
    });
};

export const addTask = task => dispatch => {
  dispatch({ type: types.REQUEST_START });
  axiosWithAuth()
    .post("api/todos", task)
    .then(res => {
      dispatch({ type: types.ADD_TASK_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: types.ADD_TASK_FAILURE, payload: err.response.data });
    });
};

export const EditTask = task => dispatch => {
  dispatch({ type: types.REQUEST_START });
  axiosWithAuth()
    .put(`api/todos/${task.id}`, task)
    .then(res => {
      // debugger;
      dispatch({ type: types.UPDATE_TASK_SUCCESS, payload: res.data });

    })
    .catch(err => {
      debugger;
      dispatch({ type: types.UPDATE_TASK_FAILURE, payload: err.response.data });
    });
};

export const deleteTask = id => dispatch => {
  dispatch({ type: types.REQUEST_START });
  axiosWithAuth()
    .delete(`api/todos/${id}`)
    .then(res => {
      dispatch({ type: types.DELETE_TASK_SUCCESS, payload: id });
    })
    .catch(err => {
      dispatch({ type: types.DELETE_TASK_FAILURE, payload: err.response.data });
    });
};

// Filtered Tasks Acton Creators
export const filterByDate = date => dispatch => {
  dispatch({ type: types.FILTER_BY_DATE, payload: date });
};

export const filterBySearchTerm = searchTerm => dispatch => {
  debugger;
  dispatch({ type: types.FILTER_BY_SEARCH_TERM, payload: searchTerm });
};

export const resetDisplayedTasks = tasks => dispatch => {
  dispatch({ type: types.RESET_DISPLAYED_TASKS, payload: tasks });
};

// User Action Creators
export const getUser = id => dispatch => {
  dispatch({ type: types.REQUEST_START });
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
  dispatch({ type: types.REQUEST_START });
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
  dispatch({ type: types.REQUEST_START });
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

import * as types from "../actionTypes";

const initialRegisterState = {
  user_id: "",
  message: "",
  error: "",
  isFetching: false
};

export const registerReducer = (state = initialRegisterState, action) => {
  switch (action.type) {
    case types.REGISTER:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        user_id: action.payload.userID,
        message: action.payload.message,
        isFetching: false
      };
    case types.REGISTER_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
};

const initialLoginState = {
  user_id: "",
  message: "",
  error: "",
  isFetching: false,
  isLoggedIn: false
};

export const loginReducer = (state = initialLoginState, action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        isFetching: true
      };
    case types.LOGIN_SUCCESS:
      return {
        user_id: action.payload.userID,
        message: action.payload.message,
        isFetching: false,
        isLoggedIn: true
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload.message,
        isFetching: false
      };
    default:
      return state;
  }
};

const initialLogoutState = {
  isLoggedIn: true
};

export const logoutReducer = (state = initialLogoutState, action) => {
  switch (action.type) {
    case types.LOGOUT:
      return {
        isLoggedIn: false
      };
    default:
      return state;
  }
};

const initialTaskList = {
  taskList: [],
  error: "",
  isFetching: false
};

export const taskListReducer = (state = initialTaskList, action) => {
  switch (action.type) {
    case types.GET_ALL_TASKS:
      return {
        ...state,
        isFetching: true
      };
    case types.GET_ALL_TASKS_SUCCESS:
      return {
        ...state,
        taskList: action.payload,
        isFetching: false
      };
    case types.GET_ALL_TASKS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    case types.ADD_TASK:
      debugger;
      return {
        ...state,
        isFetching: true
      };
    case types.ADD_TASK_SUCCESS:
      return {
        ...state,
        taskList: state.taskList.concat(action.payload),
        isFetching: false
      };
    case types.ADD_TASK_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    case types.UPDATE_TASK:
      return {
        ...state,
        isFetching: true
      };
    case types.UPDATE_TASK_SUCCESS:
      return {
        ...state,
        taskList: state.taskList.map(task => {
          if (task.id === action.payload.id) {
            return action.payload;
          }
          return task;
        }),
        isFetching: false
      };
    case types.UPDATE_TASK_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    case types.DELETE_TASK:
      return {
        ...state,
        isFetching: true
      };
    case types.DELETE_TASK_SUCCESS:
      return {
        ...state,
        taskList: state.taskList.filter(task => task.id !== action.payload)
      };
    case types.DELETE_TASK_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
};

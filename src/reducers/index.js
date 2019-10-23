import * as types from "../actionTypes";

const initialOnboardingState = {
  user_id: "",
  message: "",
  error: "",
  isFetching: false,
  isLoggedIn: false
};

export const onBoardingReducer = (state = initialOnboardingState, action) => {
  switch (action.type) {
    case types.REQUEST_START:
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
  error: '',
  isFetching: false
};

export const taskListReducer = (state = initialTaskList, action) => {
  switch (action.type) {
    case types.REQUEST_START:
      // debugger;
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
    case types.DELETE_TASK_SUCCESS:
      return {
        ...state,
        taskList: state.taskList.filter(task => task.id !== action.payload),
        isFetching: false
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

const getDateToCompare = date => {
  const formattedDate = new Date(date);
  const year = formattedDate.getFullYear();
  const month = ('0' + (formattedDate.getMonth() + 1)).slice(-2);
  const day = ('0' + formattedDate.getDate()).slice(-2);
  return `${year}${month}${day}`;
};

const intitialDisplayedTasksState = {
  state: []
};

export const displayTasksReducer = (
  state = intitialDisplayedTasksState,
  action
) => {
  switch (action.type) {
    case types.FILTER_BY_DATE:
      return {
        state: state.state.filter(task => {
          return (
            getDateToCompare(task.setDate) === getDateToCompare(action.payload)
          );
        })
      };
    case types.FILTER_BY_SEARCH_TERM:
      return {
        state: state.state.filter(task => {
          return task.task.includes(action.payload);
        })
      };
    case types.RESET_DISPLAYED_TASKS:
      // debugger;
      return {
        state: action.payload
      };
    case types.DELETE_TASK_SUCCESS:
        return {
          ...state,
          state: state.state.filter(task => task.id !== action.payload),
        };
    case types.ADD_TASK_SUCCESS:
        return {
          ...state,
          state: state.state.concat(action.payload),
        };
    default:
      return state;
  }
};

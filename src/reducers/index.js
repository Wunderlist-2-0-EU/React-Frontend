import * as types from '../actionTypes';

const initialOnboardingState = {
  user_id: '',
  message: '',
  error: '',
  isFetching: false,
  isLoggedIn: false
};

export const onBoardingReducer = (state = initialOnboardingState, action) => {
  switch (action.type) {
    case types.REQUEST_START:
      return {
        ...state,
        isFetching: true,
        error: ''
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
  taskList: [
    {
      id: 64,
      user_id: null,
      title: 'Lambda',
      task: 'Build Documentation',
      notes: null,
      setDate: 'Tomorrow',
      completed: null,
      created_at: '2019-07-21T14:30:01.322Z',
      updated_at: '2019-07-21T14:30:01.322Z'
    },
    {
      id: 65,
      user_id: null,
      title: 'Lambda',
      task: 'WEBPT8 TL',
      notes: null,
      setDate: 'Tonight',
      completed: null,
      created_at: '2019-07-21T14:30:32.381Z',
      updated_at: '2019-07-21T14:30:32.381Z'
    }
  ],
  error: '',
  isFetching: false
};

export const taskListReducer = (state = initialTaskList, action) => {
  switch (action.type) {
    case types.REQUEST_START:
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
// <<<<<<< liam-sutton
// =======
//     case types.UPDATE_TASK:
//       return {
//         ...state,
//         // isFetching: true
//       };
// >>>>>>> master
    case types.UPDATE_TASK_SUCCESS:
      return {
        ...state,
        taskList: state.taskList.find(task => task.id === action.payload),
        isFetching: false
      };
    case types.UPDATE_TASK_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
// <<<<<<< liam-sutton
// =======
//     case types.DELETE_TASK:
//       return {
//         ...state,
//         // isFetching: true
//       };
// >>>>>>> master
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

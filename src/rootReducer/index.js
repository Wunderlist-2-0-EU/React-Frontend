import * as reducers from '../reducers';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    register: reducers.registerReducer,
    login: reducers.loginReducer,
    logout: reducers.logoutReducer,
    taskList: reducers.taskListReducer,
});

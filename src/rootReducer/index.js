import * as reducers from '../reducers';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  onBoarding: reducers.onBoardingReducer,
  tasks: reducers.taskListReducer,
  displayedTasks: reducers.displayTasksReducer
});

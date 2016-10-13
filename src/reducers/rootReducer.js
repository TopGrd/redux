import { combineReducers } from 'redux';
import CounterReducer from './CounterReducer';
import todoAppReducer from './todoAppReducer';

const rootReducer = combineReducers(
  {
    CounterReducer,
    todoAppReducer
  }
);

export default rootReducer;

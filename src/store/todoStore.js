import {createStore} from 'redux';
import reducer from '../reducers/todoAppReducer';
let initalState = {
  todo: {
    items: []
  }
};
let store = createStore(reducer, initalState);
export default store;

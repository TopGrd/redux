import reducer from '../reducers/todoAppReducer';
import { createStore, applyMiddleware } from 'redux';
import logger from '../utils/middleware';
let initalState = {
  todo: {
    items: []
  }
};
const createStoreWithMiddleWare = applyMiddleware(logger)(createStore);

const store = createStoreWithMiddleWare(reducer)
export default store;

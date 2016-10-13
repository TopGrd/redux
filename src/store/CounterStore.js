import { createStore, applyMiddleware } from 'redux';
import counter from '../reducers/CounterReducer';

const logger = store => next => action => {
  console.group(action.type);
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd(action.type);
  return result;
};

const createStoreWithMiddleWare = applyMiddleware(logger)(createStore);

const store = createStoreWithMiddleWare(counter)

export default store;

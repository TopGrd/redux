import { createStore, applyMiddleware } from 'redux';
import counter from '../reducers/CounterReducer';
import logger from '../utils/middleware';

const createStoreWithMiddleWare = applyMiddleware(logger)(createStore);

const store = createStoreWithMiddleWare(counter)

export default store;

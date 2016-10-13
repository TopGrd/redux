import rootReducer from '../reducers/rootReducer';
import { createStore, applyMiddleware } from 'redux';
import logger from '../utils/middleware';

const createStoreWithMiddleWare = applyMiddleware(logger)(createStore);

const store = createStoreWithMiddleWare(rootReducer);
export default store;

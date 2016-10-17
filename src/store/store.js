import rootReducer from '../reducers/rootReducer';
import { createStore, applyMiddleware, compose } from 'redux';
import logger from '../utils/middleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
 applyMiddleware(logger)
));
/*
const createStoreWithMiddleWare = applyMiddleware(logger)(createStore);

const store = createStoreWithMiddleWare(rootReducer);*/
export default store;

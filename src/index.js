import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import ToDoAppContainer from './components/ToDoAppContainer';
import CounterContainer from './components/Counter';
import { Provider } from 'react-redux';
import store from './store/store';
import { Router, Route, browserHistory } from 'react-router';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}/>
      <Route path="/todo" component={ToDoAppContainer}/>
      <Route path="/counter" component={CounterContainer}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);

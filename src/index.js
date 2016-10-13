import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import ToDoApp from './components/ToDoApp';
import CounterContainer from './components/Counter';
import { Provider } from 'react-redux';
import store from './store/CounterStore';
import { Router, Route, hashHistory } from 'react-router';

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}/>
      <Route path="/todo" component={ToDoApp}/>
      <Route path="/counter" component={CounterContainer}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);

import Counter from './components/Counter';
import Homepage from './components/Homepage';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Link, browserHistory } from 'react-router'
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import { createStore, applyMiddleware, compose} from 'redux';
import reducers from './reducers';
import GoalList from './containers/GoalList';
import App from './App';
import './index.css';
import apiSettingsInjector from './lib/apiSettingsInjector';
import { readAppState, storeAppState } from './lib/localStorage';

/* eslint-disable no-underscore-dangle */

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={App} />
    <Route path='/counter' component={Counter} />
    <Route path='/apitest' component ={GoalList} />
    <Route path='/lifesmacktest' components={Homepage} />
  </Router>),
  document.getElementById('root')
);

//what links you want the user to have

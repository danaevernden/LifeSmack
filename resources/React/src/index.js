import Counter from './components/Counter';
import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Link, browserHistory } from 'react-router'
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import { createStore, applyMiddleware, compose} from 'redux';
import app from './reducers';
import Test from './containers/Test';
import GoalList from './containers/GoalList';
import Profile from './containers/Profile';
import Newsfeed from './containers/Newsfeed';
import Marketplace from './containers/Marketplace';
import Homepage from './components/Homepage';
import TaskList from './containers/TaskList';
import App from './App';
import reducers from './reducers';
import './index.css';
import apiSettingsInjector from './lib/apiSettingsInjector';
import { readAppState, storeAppState } from './lib/localStorage';

/* eslint-disable no-underscore-dangle */
injectTapEventPlugin();

const store = createStore(
  reducers
)

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
        <Route path='/newsfeed' components={Newsfeed} />
        <Route path='/profile' component={Profile} />
        <Route path='/marketplace' component={Marketplace} />
        <Route path='/' component={GoalList} />
        <Route path='/1' component={TaskList} />

    </Router>
  </Provider>
  ), document.getElementById('root'));
//  <Route path='/apitest' subreddit="reactjs" component ={GoalList} />


//<Route path='/React' component={App} />
//<Route path='/counter' component={Counter} />
//<Route path='/apitest' dataURL="http://walden.dev/wp-json/wp/v2/posts" component={Test} />
//<Route path='/profile' component={Profile} />
//<Route path='/marketplace' component={Marketplace} />
//<Route path='/' component={GoalList} />


//what links you want the user to have

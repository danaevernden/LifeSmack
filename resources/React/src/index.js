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
import GroupingComments from './containers/Test/groupingComments';
import GroupingComments0 from './containers/Test/groupingComments0';

import GoalList from './containers/Goals/GoalList';
import GroupThink from './containers/Test/GroupThink';
import MarketItem from './containers/Marketplace/MarketItem';
import Profile from './containers/Profile';
import Marketplace from './containers/Marketplace/Marketplace';
import Specialist from './containers/Marketplace/Specialists';
import Newsfeed from './containers/Test/Newsfeed';
import NewsfeedOld from './containers/Test/NewsfeedOld';
import Homepage from './components/Homepage';
import TaskList from './containers/TaskList';
import AddGoal from './containers/Goals/AddGoal';
import CustomGoal from './containers/Goals/CustomGoal';
import Test from './containers/Test';
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
        <Route path='/goal/1' goalID='1' component={TaskList} />
        <Route path='/goal/2' goalID='2' component={TaskList} />
        <Route path='/goals/add' component={AddGoal} />
        <Route path='/goals/custom' component={CustomGoal} />
        <Route path='/test' component={GroupingComments} />
        <Route path='/test0' component={GroupingComments0} />
        <Route path='/groupthink' component={GroupThink} />
        <Route path='/marketplace/1' component={MarketItem} />
        <Route path='/testOld' component={NewsfeedOld} />
        <Route path='marketplace/specialist/1' name='Joan Rivers' component={Specialist}/>
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

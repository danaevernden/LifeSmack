import Counter from './components/old/Counter';
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
import GroupingComments00 from './containers/Test/groupingComments00';
import GoalList from './containers/Goals/GoalList';
import GroupThink from './containers/Test/GroupThink';
import MarketItem from './containers/Marketplace/MarketItem';
import Profile from './containers/Profile';
import Marketplace from './containers/Marketplace/Marketplace';
import Newsfeed from './containers/Test/Newsfeed';
import Specialist from './containers/Marketplace/Specialists';
import NewsfeedOld from './containers/Test/NewsfeedOld';
import TaskList from './containers/TaskList';
import AddGoal from './containers/Goals/AddGoal';
import sortByExample from './containers/Test/sortByExample';
import Test from './containers/Test';
import TestApi from './containers/Test/TestAPI';
import reducers from './reducers';
import './index.css';
import apiSettingsInjector from './lib/apiSettingsInjector';
import { readAppState, storeAppState } from './lib/localStorage';
import AppContainer from './containers/app';
import Landing from './containers/Landing';
import AppDrawer from './components/appDrawer';
import Layout from './containers/Layout';
import Settings from './containers/Settings';
import About from './containers/About';
import Calendar from './containers/Calendar';
import Login from './containers/Login';

/*    <Route components={AppContainer}> */

/* eslint-disable no-underscore-dangle */
injectTapEventPlugin();

const store = createStore(
  reducers, {}, compose(applyMiddleware(apiSettingsInjector, apiMiddleware))
)


ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/landing' component={Landing} />
        <Route components={AppContainer}>
          <Route path='/app' components={{main : AppContainer}} />
          <Route path='/' components={{main : GoalList}} />
          <Route path='/account' component={{main : Profile}} />
          <Route path='/marketplace' component={{main : Marketplace}} />
          <Route path='/goal/1' goalID='1' component={{main : TaskList}} />
          <Route path='/goal/1/calendar' goalID='1' component={{main : TaskList}} />
          <Route path='/goal/2' goalID='2' component={{main : TaskList}} />
          <Route path='/goals/add' component={{main : AddGoal}} />
          <Route path='/sortby' component={{main : sortByExample}} />
          <Route path='/calendar' component={{main : Calendar}} />
          <Route path='/login' component={{main : Login}} />
          <Route path='/test000' component={{main : GroupingComments}} />
          <Route path='/test0' component={{main : GroupingComments0}} />
          <Route path='/test00' component={{main : GroupingComments00}} />
          <Route path='/testAPI' component={{main : TestApi}} />
          <Route path='/groupthink' component={{main : GroupThink}} />
          <Route path='/settings' component={{main: Settings}}/>
          <Route path='/marketplace/1' marketItem='1' component={{main : MarketItem}} />
          <Route path='/marketplace/1/reviews' marketItem='1' component={{main : MarketItem}} />
          <Route path='/marketplace/2' marketItem='2' component={{main : MarketItem}} />
          <Route path='/marketplace/3' marketItem='3' component={{main : MarketItem}} />
          <Route path='/testOld' component={{main : NewsfeedOld}} />
          <Route path='/marketplace/specialist/1' name='Joan Rivers' component={{main : Specialist}}/>
          <Route path='/about' component={{main: About}}/>
        </Route>
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

import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import { reducer, createStore, applyMiddleware, compose} from 'redux';
import GroupingComments from './containers/Test/groupingComments';
import GroupingComments0 from './containers/Test/groupingComments0';
import GroupingComments00 from './containers/Test/groupingComments00';
import GoalList from './containers/Goals/GoalList';
import MarketItem from './containers/Marketplace/MarketItem';
import Profile from './containers/Profile';
import Marketplace from './containers/Marketplace/Marketplace';
import Specialist from './containers/Marketplace/Specialists';
import NewsfeedOld from './containers/Test/NewsfeedOld';
import TaskList from './containers/TaskList';
import sortByExample from './containers/Test/sortByExample';
import TestApi from './containers/Test/TestAPI';
import reducers from './reducers';
import './index.css';
import apiSettingsInjector from './lib/apiSettingsInjector';
import { readAppState, storeAppState } from './lib/localStorage';
import AppContainer from './containers/app';
import Landing from './containers/Landing';
import Settings from './containers/Settings';
import About from './containers/Test/About';
import Calendar from './containers/Calendar';
import Login from './containers/Login';
import MarketTypes from './containers/Marketplace/MarketTypes';
import MarketCat from './containers/Marketplace/MarketCat';
import Test2 from './containers/Test2';
import Tour from './containers/Tour';

/*    <Route components={AppContainer}> */
/* eslint-disable no-underscore-dangle */
injectTapEventPlugin();

const store = createStore(
  reducers, {}, compose(applyMiddleware(apiSettingsInjector, apiMiddleware)),
  reducer, /* preloadedState, */
+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)
const goalPageData = [
  {id: 1, property: {TaskList}, link: '/goal/1'},
  {id: 2, property: {Landing}, link: '/goal/2'},
];
const goalPages =
goalPageData.map(page => <Route path={page.link} component={{main : TaskList}} goalID={page.id}/>);

const marketItemData = [
  {id: 1, property: {MarketItem}, link: '/marketplace/1'},
  {id: 2, property: {MarketItem}, link: '/marketplace/2'},
  {id: 3, property: {MarketItem}, link: '/marketplace/3'},
];


const marketItemData2 = [
  {id: 23},
  {id: 24},
  {id: 25},
  {id: 26},
  {id: 27},
  {id: 28},
  {id: 29},
  {id: 30},
  {id: 31},
  {id: 32},
  {id: 33},
  {id: 34},
  {id: 35},
  {id: 36},
  {id: 37},
  {id: 38},
];

const marketCatsData = [
  {id: 1, property: {MarketCat}, link: '/marketplace/social'},
  {id: 2, property: {MarketCat}, link: '/marketplace/sports'},
  {id: 3, property: {MarketCat}, link: '/marketplace/recreation'},
  {id: 4, property: {MarketCat}, link: '/marketplace/arts'},
  {id: 5, property: {MarketCat}, link: '/marketplace/travel'},
  {id: 6, property: {MarketCat}, link: '/marketplace/food'},
];
const marketCatPages =
marketCatsData.map(page => <Route path={page.link} component={{main : MarketCat}} marketplacegoal_id={page.id} marketItem={page.id}/>);

const marketitemPages2 =
marketItemData2.map(page => <Route path={'/marketplace/' + page.id} component={{main : MarketItem}} marketItem={page.id}/>);


const marketitemPages =
marketItemData.map(page => <Route path={page.link} component={{main : MarketItem}} marketplacegoal_id={page.id} marketItem={page.id}/>);

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>

      <Route path='/landing' component={Landing} />
        <Route components={AppContainer}>
          <Route path='/app' components={{main : AppContainer}} />
          <Route path='/' components={{main : GoalList}} />
          <Route>
              {goalPages}
          </Route>
          <Route path='/marketplace/social' marketCat='Social' component={{main : MarketCat}} />
          <Route path='/marketplace' component={{main : Marketplace}} />
          <Route>
              {marketitemPages2}
          </Route>
          <Route path='/marketplace/specialist/1' name='Joan Rivers' component={{main : Specialist}}/>
          <Route path='/about' component={{main: Tour}}/>
          <Route path='/login' component={{main : Login}} />
          <Route path='/settings' component={{main: Settings}}/>

          ///test routes/////////
          <Route path='/test' component={{main : Test2}} />
          <Route path='/test000' component={{main : GroupingComments}} />
          <Route path='/test00' component={{main : GroupingComments00}} />
          <Route path='/testAPI' component={{main : TestApi}} />
          <Route path='/calendar' component={{main : Calendar}} />
          <Route path='/sortby' component={{main : sortByExample}} />
          <Route path='/testOld' component={{main : NewsfeedOld}} />
          <Route path='/profile' component={Profile} />

        </Route>
    </Router>
  </Provider>
  ), document.getElementById('root'));
//  <Route path='/apitest' subreddit="reactjs" component ={GoalList} />


//<Route path='/React' component={App} />
//<Route path='/apitest' dataURL="http://walden.dev/wp-json/wp/v2/posts" component={Test} />
//<Route path='/marketplace' component={Marketplace} />
//<Route path='/' component={GoalList} />


//what links you want the user to have

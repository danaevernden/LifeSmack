import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { apiMiddleware } from 'redux-api-middleware';
import { reducer, createStore, applyMiddleware, compose} from 'redux';
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
import AppContainer from './containers/app';
import Landing from './containers/Landing';
import Settings from './containers/Settings';
import Signup from './containers/Signup';
import Calendar from './containers/Calendar';
import Login from './containers/Login';
import MarketCat from './containers/Marketplace/MarketCat';
import Logout from './containers/Logout';
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
  {id: 3, property: {TaskList}, link: '/goal/3'},
  {id: 4, property: {Landing}, link: '/goal/4'},
  {id: 5, property: {Landing}, link: '/goal/5'},
  {id: 6, property: {Landing}, link: '/goal/6'},
  {id: 7, property: {Landing}, link: '/goal/7'},
  {id: 8, property: {Landing}, link: '/goal/8'},
  {id: 9, property: {Landing}, link: '/goal/9'},
  {id: 10, property: {Landing}, link: '/goal/10'},


];
const goalPages =
goalPageData.map(page => <Route key={page.id} path={page.link} component={{main : TaskList}} goalID={page.id}/>);


const marketItemData2 = [
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4},
  {id: 5},
  {id: 6},
  {id: 7},
  {id: 8},
  {id: 9},
  {id: 10},
  {id: 11},
  {id: 12},
  {id: 13},
  {id: 14},
  {id: 15},
  {id: 23}
];

const marketCatsData = [
  {id: 1, property: {MarketCat}, marketCat: 'Social Goals', link: '/marketplace/social'},
  {id: 2, property: {MarketCat}, marketCat: 'Sports Goals', link: '/marketplace/sports'},
  {id: 3, property: {MarketCat}, marketCat: 'Recreation Goals', link: '/marketplace/recreation'},
  {id: 4, property: {MarketCat}, marketCat: 'Arts Goals', link: '/marketplace/arts'},
  {id: 5, property: {MarketCat}, marketCat: 'Travel Goals', link: '/marketplace/travel'},
  {id: 6, property: {MarketCat}, marketCat: 'Food Goals', link: '/marketplace/food'},
];
const marketCatPages =
marketCatsData.map(page => <Route key={page.id} marketCat={page.marketCat} path={page.link} component={{main : MarketCat}} marketplacegoal_id={page.id} marketItem={page.id}/>);

const marketitemPages2 =
marketItemData2.map(page => <Route key={page.id} path={'/marketplace/' + page.id} component={{main : MarketItem}} marketItem={page.id}/>);


ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/login' component={Login} />
      <Route path='/signup' component={Signup}/>
      <Route path='/logout' component={Logout}/>
      <Route path='/landing' component={Landing} />
        <Route components={AppContainer}>
          <Route path='/app' components={{main : AppContainer}} />
          <Route path='/' components={{main : GoalList}} />
          <Route>
              {goalPages}
          </Route>

          <Route path='/marketplace/social2' marketCat='Social' component={{main : MarketCat}} />
          <Route path='/marketplace' component={{main : Marketplace}} />
          <Route>
              {marketitemPages2}
          </Route>
          <Route>
            {marketCatPages}
          </Route>
          <Route path='/marketplace/specialist/1' name='Joan Rivers' component={{main : Specialist}}/>
          <Route path='/about' component={{main: Tour}}/>
          <Route path='/settings' component={{main: Settings}}/>
          ///test routes/////////

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

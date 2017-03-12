import { combineReducers } from 'redux';
import newsfeed from './newsfeed';
import goals from './goals';
import profile from './profile';
import marketplace from './marketplace';

const app = combineReducers({
  newsfeed,
  goals,
  profile,
  marketplace
});

export default app;

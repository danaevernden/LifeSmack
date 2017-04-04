import { combineReducers } from 'redux';
import newsfeed from './old/newsfeed';
import goals from './goals';
import profile from './profile';
import marketplace from './marketplace';
import tasks from './tasks';
import comments from './comments';
import groupthink from './groupthink';
import mygroups from './mygroups';
import reviews from './reviews';
import categories from './categories';

const app = combineReducers({
  newsfeed,
  categories,
  goals,
  profile,
  marketplace,
  tasks,
  comments,
  groupthink,
  mygroups,
  reviews
});

export default app;

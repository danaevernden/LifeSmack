import { combineReducers } from 'redux';
import newsfeed from './old/newsfeed';
import goals from './goals';
import profile from './profile';
import tasks from './tasks';
import groupthink from './old/groupthink';
import mygroups from './old/mygroups';
import reviews from './reviews';
import categories from './categories';
import markettasks from './markettasks';
import marketplace from './marketplace';
import comments from './comments';

const app = combineReducers({
  newsfeed,
  categories,
  goals,
  profile,
  marketplace,
  markettasks,
  tasks,
  comments,
  reviews
});

export default app;

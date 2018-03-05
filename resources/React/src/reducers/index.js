import { combineReducers } from 'redux';
import goals from './goals';
import tasks from './tasks';
import reviews from './reviews';
import categories from './categories';
import markettasks from './markettasks';
import marketplacegoals from './marketplacegoals';
import comments from './comments';
import rightMenu from './rightMenu';
import users from './users';

const app = combineReducers({
  categories,
  goals,
  marketplacegoals,
  markettasks,
  rightMenu,
  tasks,
  comments,
  reviews,
  users
});

export default app;

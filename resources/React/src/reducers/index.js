import { combineReducers } from 'redux';
import goals from './goals';
import profile from './profile';
import tasks from './tasks';
import reviews from './reviews';
import categories from './categories';
import markettasks from './markettasks';
import marketplacegoals from './marketplacegoals';
import comments from './comments';
import rightMenu from './rightMenu';

const app = combineReducers({
  categories,
  goals,
  profile,
  marketplacegoals,
  markettasks,
  rightMenu,
  tasks,
  comments,
  reviews
});

export default app;

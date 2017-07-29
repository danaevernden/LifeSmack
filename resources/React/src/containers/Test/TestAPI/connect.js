/* eslint-disable */

import fetchTasks from '../../../actions/tasks';
import fetchGoals from '../../../actions/goals';
import fetchCategories from '../../../actions/categories';
import fetchComments from '../../../actions/comments';

export const mapStateToProps = state => ({
  newtasks: state.newtasks.newtasks,
  newgoals: state.newgoals.newgoals,
  newcategories: state.newcategories.newcategories,
  newcomments: state.newcomments.newcomments,
  newmarketplace: state.newmarketplace.newmarketplace
});

export const mapDispatchToProps = dispatch => ({
  fetchTasksFromActions: () => dispatch(fetchTasks()),
  fetchCommentsFromActions: () => dispatch(fetchComments()),
  fetchCategoriesFromActions: () => dispatch(fetchCategories()),
  fetchGoalsFromActions: () => dispatch(fetchGoals()),
})

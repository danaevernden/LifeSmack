import {addTaskToGoal} from '../../actions/tasks';
import fetchTasks from '../../actions/tasks';
import fetchComments from '../../actions/comments';
import fetchCategories from '../../actions/categories';
import fetchGoals from '../../actions/goals';

export const mapStateToProps = (state) => ({
  tasks: state.tasks.tasks,
  comments: state.comments.comments,
  categories: state.categories.categories,
  goals: state.goals.goals
});

export const mapDispatchToProps = (dispatch) => ({
  //this was blank before
  // similar to method above, returning an object, but in this case the object consists
  //of functions that will dispatch actions globally
  //action is an object with a type key
  //addnewsitem is the action creator, which is a function
  fetchTasksFromActions: () => dispatch(fetchTasks()),
  fetchCommentsFromActions: () => dispatch(fetchComments()),
  fetchCategoriesFromActions: () => dispatch(fetchCategories()),
  fetchGoalsFromActions: () => dispatch(fetchGoals()),


  addTaskToGoal: (task_name, complete) => dispatch(addTaskToGoal(task_name, complete))
});
